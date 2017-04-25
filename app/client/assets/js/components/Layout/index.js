import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'actions';
import Authenticated from './Authenticated';
import Default from './Default';

const mapStateToProps = (state) => ({
  api: state.api,
  auth: state.auth
});
const mapDispatchToProps = (dispatch) => ({
  dispatch,
  actions: {
    api: bindActionCreators(actionCreators.api, dispatch)
  }
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Layout extends React.Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    api: React.PropTypes.object.isRequired,
    auth: React.PropTypes.object.isRequired,
    children: React.PropTypes.object.isRequired,
    location: React.PropTypes.object.isRequired
  };
  componentWillMount() {

    this.props.actions.api.switchContext();
  }
  render() {

    return (this.props.auth.user) ? <Authenticated {...this.props} /> : <Default {...this.props} />;
  }
}
