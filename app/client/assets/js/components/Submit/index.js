import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { push, replace } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'actions';
import { Button, Message, Segment, Step } from 'semantic-ui-react';
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
    this.setCompletedSteps = this.setCompletedSteps.bind(this);
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
          title: 'Confirm Order',
          description: 'Verify order details',
          disabled: true,
          name: 'confirmation'
        }
      }
    };
  }
  componentDidMount() {

    NProgress.done();
    if (this.props.auth.user) {
      this.props.dispatch(push('/submit/listing'));
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
    for (const step of Object.values(steps)) {

      steps[step.name].active = false;
      steps[step.name].disabled = true;
      if (step.name === name) {
        steps[step.name].active = true;
        steps[step.name].disabled = false;
      }
    }
    this.setState({ steps });
  }
  setCompletedSteps() {

    const steps = this.state.steps;
    for (const step of Object.values(steps)) {

      steps[step.name].completed = false;
      if (steps[step.name].completed === true) {
        steps[step.name].completed = true;
      }
    };
    this.setState({ steps });
  }
  render() {

    return (
      <div>
        <Segment attached='bottom'>
          <Step.Group fluid size='mini' items={Object.values(this.state.steps)} />
        </Segment>
        {this.props.children ? React.cloneElement(this.props.children, { steps: this.state.steps, setActiveStep: this.setActiveStep, setCompletedSteps: this.setCompletedSteps, ...this.props }) :
          <div>
            <Segment>
              <Message warning>
                <Message.Header>Authentication Required</Message.Header>
                <p>
                  <em>Sign up or login to submit new listing.</em>
                </p>
              </Message>
            </Segment>
            <Segment>
              <Button fluid primary
                as={Link}
                to='/signup'
                disabled={this.state.isLoading}
                loading={this.state.isLoading}
                onClick={this.handleSubmit}
                icon='right arrow'
                labelPosition='right'
                content='Get Started'
              />
            </Segment>
          </div>
        }
      </div>
    );
  }

}
