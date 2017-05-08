import toArray from 'lodash/toarray';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { push, replace } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'actions';
import { Button, Grid, Message, Segment, Step } from 'semantic-ui-react';
import { NProgress } from 'components';

const mapStateToProps = (state) => ({
  auth: state.auth,
  listings: state.listings
});
const mapDispatchToProps = (dispatch) => ({
  dispatch,
  actions: {
    alert: bindActionCreators(actionCreators.alert, dispatch),
    auth: bindActionCreators(actionCreators.auth, dispatch),
    listings: bindActionCreators(actionCreators.listings, dispatch)
  }
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Submit extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    children: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };
  constructor(props) {

    super(props);
    this.setActiveStep = this.setActiveStep.bind(this);
    this.setCompletedStep = this.setCompletedStep.bind(this);
    this.resetCompletedSteps = this.resetCompletedSteps.bind(this);
    this.state = {
      isLoading: false,
      steps: {
        listing: {
          active: false,
          completed: false,
          icon: 'anchor',
          title: 'Listing',
          description: 'Provide listing details',
          disabled: true,
          name: 'listing'
        },
        billing: {
          active: false,
          completed: false,
          icon: 'payment',
          title: 'Billing',
          description: 'Enter billing information',
          disabled: true,
          name: 'billing'
        },
        confirmation: {
          active: false,
          completed: false,
          icon: 'info',
          title: 'Confirmation',
          description: 'Receipt for transaction',
          disabled: true,
          name: 'confirmation'
        }
      }
    };
  }
  componentDidMount() {

    NProgress.done();
    if (this.props.auth.user) {
      this.props.dispatch(replace('/submit/listing'));
    }
  }
  componentWillReceiveProps(nextProps) {

    if (this.props.auth.user && nextProps.location.pathname === '/submit') {
      this.props.dispatch(replace('/submit/listing'));
    }
  }
  componentDidUpdate() {

    NProgress.done();
  }
  setActiveStep(name) {

    const steps = this.state.steps;
    for (const step of toArray(steps)) {

      steps[step.name].active = false;
      steps[step.name].disabled = true;
      if (step.name === name) {
        steps[step.name].active = true;
        steps[step.name].disabled = false;
      }
    }
    this.setState({ steps });
  }
  setCompletedStep(name) {

    const { steps } = this.state;
    steps[name].completed = true;
    this.setState({ steps });
  }
  resetCompletedSteps() {

    const steps = this.state.steps;
    for (const step of toArray(steps)) {

      steps[step.name].active = false;
      steps[step.name].disabled = true;
      steps[step.name].completed = false;
    }
    this.setState({ steps });
  }
  render() {

    return (
      <div>
        {!this.props.children ? null :
          <Grid>
            <Grid.Column width='2' only='computer' />
            <Grid.Column width='16' computer='12'>
              <Segment attached='bottom'>
                <Step.Group fluid size='mini' items={toArray(this.state.steps)} />
              </Segment>
            </Grid.Column>
            <Grid.Column width='2' only='computer' />
          </Grid>
        }
        {this.props.children ?
          <Grid>
            <Grid.Column width='2' only='computer' />
            <Grid.Column width='16' computer='12'>
              {React.cloneElement(this.props.children, { steps: this.state.steps, setActiveStep: this.setActiveStep, setCompletedStep: this.setCompletedStep, resetCompletedSteps: this.resetCompletedSteps, ...this.props })}
            </Grid.Column>
            <Grid.Column width='2' only='computer' />
          </Grid>
          :
          <Grid>
            <Grid.Column width='4' only='computer' />
            <Grid.Column width='16' computer='8'>
              <Segment attached='bottom'>
                <div className="ui vertical center aligned very padded segment">
                  <h2 className="ui center aligned icon header">
                    <i className={'circular anchor icon'} /> Submit
                  </h2>
                  <p>Sign up or login to submit new listing.</p>
                </div>
                <Button fluid primary
                  as={Link}
                  to='/signup'
                  disabled={this.state.isLoading}
                  loading={this.state.isLoading}
                  onClick={this.handleSubmit}
                  content='Get Started'
                />
              </Segment>
              <Message style={{ textAlign: 'center' }}>
                Your first listing is free!
              </Message>
            </Grid.Column>
            <Grid.Column width='4' only='computer' />
          </Grid>
        }
      </div>
    );
  }

}
