import get from 'lodash/get';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { Button, Form, Grid, Input, Message, Segment } from 'semantic-ui-react';
import * as actionCreators from 'actions';
import { auth } from 'actions';
import { NProgress } from 'components';

const mapStateToProps = (state) => ({
  ...state.auth
});
const mapDispatchToProps = (dispatch) => ({
  dispatch,
  actions: {
    alert: bindActionCreators(actionCreators.alert, dispatch),
    auth: bindActionCreators(actionCreators.auth, dispatch)
  }
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Signup extends React.Component {
  static propTypes = {
    error: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };
  state = {
    email: '',
    verificationEmail: '',
    password: '',
    isLoading: false,
    redirectTo: this.props.location.query.redirect || '/'
  };
  constructor(props) {

    super(props);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {

    if (auth.isAuthenticated()) {
      this.props.dispatch(push(this.state.redirectTo));
    }
  }
  componentDidMount() {

    NProgress.done();
  }
  hasValidationError(validationKey) {

    return (get(this.props.error, 'validation.keys') && this.props.error.validation.keys.includes(validationKey)) ? true : false;
  }
  handleSignup(event) {

    event.preventDefault();
    this.setState({ isLoading: true }, () => {

      const { email, verificationEmail, password } = this.state;
      this.props.actions.auth.signup({ email, verificationEmail, password })
        .then(() => this.props.actions.auth.login({ email, password }))
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
  render() {

    return (
      <Grid>
        <Grid.Column width='4' only='computer' />
        <Grid.Column width='16' computer='8'>
          <Segment stacked attached='bottom'>
          <Form autoComplete='off'>
              <Form.Group widths='equal'>
                <Form.Field error={this.hasValidationError('email')}>
                  <label>Email</label>
                  <Input
                    icon='mail'
                    iconPosition='left'
                    name="email"
                    onChange={this.handleChange}
                    placeholder='Email address'
                    type="text"
                    value={this.state.email}
                  />
                </Form.Field>
                <Form.Field error={this.hasValidationError('verificationEmail')}>
                  <label>Confirm Email</label>
                  <Input
                    name="verificationEmail"
                    onChange={this.handleChange}
                    placeholder='Re-enter email address'
                    type="text"
                    value={this.state.verificationEmail}
                  />
                </Form.Field>
              </Form.Group>
              <Form.Field error={this.hasValidationError('password')}>
                <label>Password</label>
                <Input
                  icon='lock'
                  iconPosition='left'
                  name="password"
                  onChange={this.handleChange}
                  placeholder='New password'
                  type="password"
                  value={this.state.password}
                />
              </Form.Field>
              <Button fluid primary
                loading={this.state.isLoading}
                disabled={this.state.isLoading}
                onClick={this.handleSignup}
                content='Sign Up'
              />
            </Form>
          </Segment>
          <Segment>
            <Message style={{ textAlign: 'center' }}>
              Already have an account? <Link to='/login'>Log In</Link>
            </Message>
          </Segment>
        </Grid.Column>
        <Grid.Column width='4' only='computer' />
      </Grid>
    );
  }
}
