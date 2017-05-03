import get from 'lodash/get';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push, replace } from 'react-router-redux';
import * as actionCreators from 'actions';
import {  Button, Form, Input, Message, Segment } from 'semantic-ui-react';
import { NProgress } from 'components';
import Script from 'react-load-script';
import ReactGA from 'react-ga';

const mapStateToProps = (state) => ({
  listings: state.listings,
  stripe: state.stripe
});
const mapDispatchToProps = (dispatch) => ({
  dispatch,
  actions: {
    alert: bindActionCreators(actionCreators.alert, dispatch),
    stripe: bindActionCreators(actionCreators.stripe, dispatch)
  }
});

@connect(mapStateToProps, mapDispatchToProps)
export default class SubmitBilling extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    error: PropTypes.any,
    actions: PropTypes.object,
    listings: PropTypes.object.isRequired,
    setActiveStep: PropTypes.func.isRequired,
    setCompletedStep: PropTypes.func.isRequired,
    steps: PropTypes.object.isRequired,
    stripe: PropTypes.object.isRequired
  };
  state = {
    isLoading: true,
    billing: {
      number: '',
      exp_month: '',
      exp_year: '',
      cvc: ''
    },
    script: {
      loaded: false,
      error: false
    }
  };
  constructor(props) {

    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleContinue = this.handleContinue.bind(this);
    this.handleScriptCreate = this.handleScriptCreate.bind(this);
    this.handleScriptError = this.handleScriptError.bind(this);
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
  }
  componentWillMount() {

    if (!this.props.steps.listing.completed) {
      return this.props.dispatch(replace('/submit/listing'));
    }
    if (this.props.steps.billing.completed) {
      return this.props.dispatch(replace('/submit/confirmation'));
    }
    if (this.props.listings.listing.active) {
      ReactGA.event({
        category: 'Listings',
        action: 'Redeem Free Credit Success',
        label: 'Onsite'
      });
      this.props.setCompletedStep('billing');
      return this.props.dispatch(replace('/submit/confirmation'));
    }
    this.setState({ isLoading: false });
    this.props.setActiveStep('billing');
  }
  componentWillUnmount() {

    this.props.setActiveStep(false);
  }
  componentDidMount() {

    NProgress.done();
  }
  handleScriptCreate() {

    const script = this.state.script;
    script.loaded = false;
    this.setState({ script });
  }
  handleScriptError() {

    const script = this.state.script;
    script.error = true;
    this.setState({ script });
  }
  handleScriptLoad() {

    const script = this.state.script;
    script.loaded = true;
    this.setState({ script });
  }
  hasValidationError(validationKey) {

    return (get(this.props.error, 'validation.keys') && this.props.error.validation.keys.includes(validationKey)) ? true : false;
  }
  handleChange(event) {

    const { billing } = this.state;
    billing[event.target.name] = event.target.value;
    this.setState({ billing });
  }
  handleContinue(event) {

    event.preventDefault();
    this.setState({ isLoading: true }, () => {

      Stripe.setPublishableKey(__STRIPE_PUBLISHABLE_KEY__);

      this.props.actions.stripe.createToken(this.state.billing)
      .then((response) => this.props.actions.stripe.createCharge({ stripeTokenId: this.props.stripe.token.id, listingId: this.props.listings.listing.id }))
      .then((response) => {

        this.props.setCompletedStep('billing');
        this.setState({ isLoading: false });
        this.props.dispatch(push('/submit/confirmation'));
      })
      .catch((error) => {

        this.setState({ isLoading: false });
        this.props.actions.alert.error(error.message);
      });
    });
  }
  render() {

    return (
      <div>
        <Script
          url="https://js.stripe.com/v2/"
          onCreate={this.handleScriptCreate}
          onError={this.handleScriptError}
          onLoad={this.handleScriptLoad}
        />
        <Segment loading={this.state.isLoading}>
          <Form>
            <Message info>
              <Message.Header>Terms of Service</Message.Header>
              <p>
                <em>There is a one-time charge of <strong>$10.00 USD</strong> to use
                this service.</em> Listings will remain active on this website for
                30 days and appear immediately upon successful processing of payment.
                An email receipt of this transaction will be sent to you. After 30
                days you'll receive another email giving you the option to renew the
                listing.
              </p>
            </Message>
            <Form.Group>
              <Form.Field error={this.hasValidationError('number')} width='6'>
                <label>Card Number</label>
                <Input
                  icon='credit card alternative'
                  iconPosition='left'
                  name="number"
                  onChange={this.handleChange}
                  placeholder='Card Number'
                  type="text"
                  value={this.state.number}
                />
              </Form.Field>
              <Form.Field error={this.hasValidationError('exp_month')} width='4'>
                <label>Expiration Month</label>
                <Input
                  name="exp_month"
                  onChange={this.handleChange}
                  placeholder='Expiration Month'
                  type="text"
                  value={this.state.exp_month}
                />
              </Form.Field>
              <Form.Field error={this.hasValidationError('exp_year')} width='4'>
                <label>Expiration Year</label>
                <Input
                  name="exp_year"
                  onChange={this.handleChange}
                  placeholder='Expiration Year'
                  type="text"
                  value={this.state.exp_year}
                />
              </Form.Field>
              <Form.Field error={this.hasValidationError('cvc')} width='2'>
                <label>CVC</label>
                <Input
                  name="cvc"
                  onChange={this.handleChange}
                  placeholder='CVC'
                  type="text"
                  value={this.state.cvc}
                />
              </Form.Field>
            </Form.Group>
          </Form>
        </Segment>
        <Segment>
          <Button fluid primary
            disabled={this.state.isLoading}
            loading={this.state.isLoading}
            onClick={this.handleContinue}
            icon='right arrow'
            labelPosition='right'
            content='Continue'
          />
        </Segment>
      </div>
    );
  }

}
