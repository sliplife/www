import get from 'lodash/get';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router';
import { Button, Form, Grid, Input, Message, Segment } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'actions';
import { NProgress } from 'components';

const mapStateToProps = (state) => ({
  auth: state.auth,
  tokens: state.tokens
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  actions: {
    alert: bindActionCreators(actionCreators.alert, dispatch),
    auth: bindActionCreators(actionCreators.auth, dispatch),
    tokens: bindActionCreators(actionCreators.tokens, dispatch)
  }
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Recovery extends React.Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    routeParams: PropTypes.object.isRequired,
    tokens: PropTypes.object.isRequired
  };
  state = {
    isLoading: false,
    email: '',
    password: '',
    verificationPassword: '',
    redirectTo: '/'
  };
  constructor(props) {

    super(props);
    this.handleRecover = this.handleRecover.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {

    if (this.props.auth.user) {
      this.props.dispatch(push(this.state.redirectTo));
    }
  }
  componentDidMount() {

    if (this.props.routeParams.token) {
      this.props.actions.tokens.read(this.props.routeParams.token, { with: 'user' })
        .then(() => NProgress.done());
    }
    else {
      NProgress.done();
    }
  }
  hasValidationError(validationKey) {

    return (get(this.props.auth.error, 'validation.keys') && this.props.auth.error.validation.keys.includes(validationKey)) ? true : false;
  }
  handleRecover(event) {

    event.preventDefault();
    this.setState({ isLoading: true }, () => {

      this.props.actions.auth.sendRecovery({ email: this.state.email })
        .then(() => {

          this.setState({ isLoading: false });
          this.props.actions.alert.success('Recovery email sent. Check your email.');
        })
        .catch((error) => {

          this.setState({ isLoading: false });
          this.props.actions.alert.error(error.message);
        });
    });
  }
  updatePassword(event) {

    event.preventDefault();
    this.setState({ isLoading: true }, () => {

      const { token, password, verificationPassword } = this.state;
      this.props.actions.auth.updatePassword({ token, password, verificationPassword })
        .then(() => this.props.actions.auth.login({ email: this.props.tokens.token.user.email, password }))
        .then(() => this.props.dispatch(push(this.state.redirectTo)))
        .catch((error) => {

          this.setState({ isLoading: false });
          this.props.actions.alert.error(error.message);
        });
    });
  }
  handleChange(event) {

    this.setState({ [event.target.name]: event.target.value });
  }
  renderStepOne() {

    return (
      <Segment stacked attached='bottom'>
        <Form.Field error={this.hasValidationError('email')}>
          <label>Email</label>
          <Input
            icon='mail'
            iconPosition='left'
            name="email"
            onChange={this.handleChange}
            placeholder='Email'
            type="text"
            value={this.state.email}
          />
        </Form.Field>
        <Button primary fluid
          disabled={this.state.isLoading}
          loading={this.state.isLoading}
          onClick={this.handleRecover}
          content='Recover Password'
        />
      </Segment>
    );
  }
  renderStepTwo() {

    return (
      <Segment stacked>
        <Form.Group widths='equal'>
          <Form.Field error={this.hasValidationError('password')}>
            <label>New Password</label>
            <Input
              icon='lock'
              iconPosition='left'
              name="password"
              onChange={this.handleChange}
              placeholder='Password'
              type="password"
              value={this.state.password}
            />
          </Form.Field>
          <Form.Field error={this.hasValidationError('verificationPassword')}>
            <label>Confirm New Password</label>
            <Input
              name="verificationPassword"
              onChange={this.handleChange}
              placeholder="Re-enter new password"
              type="password"
              value={this.state.verificationPassword}
            />
          </Form.Field>
        </Form.Group>
        <Button fluid primary
          disabled={this.state.isLoading}
          loading={this.state.isLoading}
          onClick={this.updatePassword}
          content='Continue'
        />
      </Segment>
    );
  }
  renderSteps() {

    return (!this.props.routeParams.token) ? this.renderStepOne() : this.renderStepTwo();
  }
  render() {

    return (
      <Grid>
        <Grid.Column width='4' only='computer' />
        <Grid.Column width='16' computer='8'>
          <Form autoComplete='off'>
            {this.renderSteps()}
          </Form>
          <Message style={{ textAlign: 'center' }}>
            Already know your password? <Link to='/login'>Log In</Link>
          </Message>
        </Grid.Column>
        <Grid.Column width='4' only='computer' />
      </Grid>
    );
  }

}
