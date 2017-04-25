import React, { PropTypes } from 'react';
import { push } from 'react-router-redux';
import { Button, Form, Icon, Segment } from 'semantic-ui-react';
import { NProgress } from 'components';

export default class InstallerAccount extends React.Component {
  static propTypes = {
    api: PropTypes.object,
    dispatch: PropTypes.func,
    installer: PropTypes.object,
    actions: PropTypes.object,
    setActiveStep: PropTypes.func,
    setCompletedStep: PropTypes.func
  };
  state = {
    isLoading: true
  };
  constructor(props) {

    super(props);
    this.handleContinue = this.handleContinue.bind(this);
  }
  componentWillMount() {

    this.props.actions.installer.status()
      .then(() => {

        if (!this.props.installer.database.completed) {
          return this.props.dispatch(push('/installer/database'));
        }
        if (!this.props.installer.account.completed) {
          return this.props.dispatch(push('/installer/account'));
        }
        this.setState({ isLoading: false });
        this.props.setActiveStep('confirmation');
      });
  }
  componentWillUnmount() {

    this.props.setActiveStep(false);
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
        <Segment stacked tertiary style={{ border: '1px solid #DCDDDE', background: '#fff' }}>
          <div className="ui vertical center aligned very padded segment">
            <h2 className="ui center aligned icon header">
              <Icon circular name='world' />&nbsp;
              {this.props.api.domain}
            </h2>
            <p>
              Ready to use NodeWrite
            </p>
          </div>
          <Button fluid primary
            loading={this.state.isLoading}
            disabled={this.state.isLoading}
            onClick={this.handleContinue}
            content='Continue'
          />
        </Segment>
      </Form>
    );
  }

}
