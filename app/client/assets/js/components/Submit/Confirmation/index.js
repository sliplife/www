import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push, replace } from 'react-router-redux';
import * as actionCreators from 'actions';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { Button, Form, Segment } from 'semantic-ui-react';
import { NProgress } from 'components';

const mapStateToProps = (state) => ({
  auth: state.auth,
  listings: state.listings,
  stripe: state.stripe
});
const mapDispatchToProps = (dispatch) => ({
  dispatch,
  actions: {
    listings: bindActionCreators(actionCreators.listings, dispatch)
  }
});

@connect(mapStateToProps, mapDispatchToProps)
export default class InstallerAccount extends React.Component {
  static propTypes = {
    api: PropTypes.object,
    auth: PropTypes.object,
    dispatch: PropTypes.func,
    actions: PropTypes.object,
    listings: PropTypes.object.isRequired,
    setActiveStep: PropTypes.func.isRequired,
    setCompletedStep: PropTypes.func.isRequired,
    resetCompletedSteps: PropTypes.func.isRequired,
    steps: PropTypes.object.isRequired
  };
  state = {
    isLoading: true
  };
  constructor(props) {

    super(props);
    this.handleContinue = this.handleContinue.bind(this);
  }
  componentWillMount() {

    if (!this.props.steps.listing.completed) {
      return this.props.dispatch(replace('/submit/listing'));
    }
    if (!this.props.steps.billing.completed) {
      return this.props.dispatch(replace('/submit/billing'));
    }
    this.setState({ isLoading: false });
    this.props.setActiveStep('confirmation');
    this.props.setCompletedStep('confirmation');
  }
  componentWillUnmount() {

    this.props.setActiveStep(false);
    this.props.actions.listings.reset();
    this.props.resetCompletedSteps();
  }
  componentDidMount() {

    NProgress.done();
  }
  handleContinue(event) {

    event.preventDefault();
    this.setState({ isLoading: true }, () => this.props.dispatch(push('/login')));
  }
  render() {

    return (
      <Form loading={this.state.isLoading}>
        <Segment attached='bottom'>
          <div className="ui vertical center aligned very padded segment">
            <h2 className="ui center aligned icon header">
              <i className={'circular anchor icon'} /> Success
            </h2>
            <p>Receipt sent to {this.props.auth.user.email}</p>
          </div>
        </Segment>
        <Segment>
          <Button fluid primary
            as={Link}
            to={`/listings/${this.props.listings.listing.id}`}
            content='Finished'
          />
        </Segment>
      </Form>
    );
  }

}
