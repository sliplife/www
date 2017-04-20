import React, { PropTypes } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Icon, Message, Segment } from 'semantic-ui-react';
import * as actionCreators from 'actions';
const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  actions: {
    alert: bindActionCreators(actionCreators.alert, dispatch),
    auth: bindActionCreators(actionCreators.auth, dispatch)
  }
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Logout extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };
  componentDidMount() {

    setTimeout(() => this.handleLogout(), 1000);
  }
  handleLogout() {

    this.props.actions.auth.logout();
    this.props.dispatch(push('/login'));
  }
  render() {

    return (
      <Segment attached='bottom'>
        <Message icon>
          <Icon name='circle notched' loading />
          <Message.Content>
            <Message.Header>
              Signing you out
            </Message.Header>
            Your session is being destroyed.
          </Message.Content>
        </Message>
      </Segment>
    );
  }
}
