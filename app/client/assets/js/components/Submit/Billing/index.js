import get from 'lodash/get';
import React, { PropTypes } from 'react';
import { push } from 'react-router-redux';
import {  Button, Form, Input, Message, Segment } from 'semantic-ui-react';
import { NProgress } from 'components';
import Script from 'react-load-script';

export default class SubmitBilling extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    error: PropTypes.any,
    actions: PropTypes.object,
    setActiveStep: PropTypes.func.isRequired,
    setCompletedStep: PropTypes.func.isRequired,
    steps: PropTypes.object.isRequired
  };
  state = {
    isLoading: true,
    billing: {
      cardNumber: '',
      cardExpirationMonth: '',
      cardExpirationYear: '',
      cardCvc: ''
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
      return this.props.dispatch(push('/submit/listing'));
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

    this.setState({ script: { loaded: false, ...this.state.script } });
  }
  handleScriptError() {

    this.setState({ script: { error: true, ...this.state.script } });
  }

  handleScriptLoad() {

    this.setState({ script: { loaded: true, ...this.state.script } });
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

      // this.props.actions.installer.account(this.state.billing)
      //   .then((response) => this.props.dispatch(push('/installer/confirmation')))
      //   .catch((error) => {
      //
      //     this.setState({ isLoading: false });
      //     this.props.actions.alert.error(error.message);
      //   });
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
        <Segment>
          <Form loading={this.state.isLoading}>
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
              <Form.Field error={this.hasValidationError('cardNumber')} width='6'>
                <label>Card Number</label>
                <Input
                  icon='credit card alternative'
                  iconPosition='left'
                  name="cardNumber"
                  onChange={this.handleChange}
                  placeholder='Card Number'
                  type="text"
                  value={this.state.cardNumber}
                />
              </Form.Field>
              <Form.Field error={this.hasValidationError('cardExpirationMonth')} width='4'>
                <label>Expiration Month</label>
                <Input
                  name="cardExpirationMonth"
                  onChange={this.handleChange}
                  placeholder='Expiration Month'
                  type="text"
                  value={this.state.cardExpirationMonth}
                />
              </Form.Field>
              <Form.Field error={this.hasValidationError('cardExpirationYear')} width='4'>
                <label>Expiration Year</label>
                <Input
                  name="cardExpirationYear"
                  onChange={this.handleChange}
                  placeholder='Expiration Year'
                  type="text"
                  value={this.state.cardExpirationYear}
                />
              </Form.Field>
              <Form.Field error={this.hasValidationError('cardCvc')} width='2'>
                <label>CVC</label>
                <Input
                  name="cardCVC"
                  onChange={this.handleChange}
                  placeholder='CVC'
                  type="text"
                  value={this.state.cardCVC}
                />
              </Form.Field>
            </Form.Group>
          </Form>
        </Segment>
        <Segment>
          <Button fluid primary
            disabled={this.state.isLoading}
            loading={this.state.isLoading}
            onClick={this.handleSubmit}
            icon='right arrow'
            labelPosition='right'
            content='Continue'
          />
        </Segment>
      </div>
    );
  }

}
