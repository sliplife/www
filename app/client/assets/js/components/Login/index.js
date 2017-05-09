import get from 'lodash/get';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { Button, Form, Grid, Icon, Input, Message, Segment } from 'semantic-ui-react';
import * as actionCreators from 'actions';
import { Link, NProgress } from 'components';

const mapStateToProps = (state) => ({
  auth: state.auth
});
const mapDispatchToProps = (dispatch) => ({
  dispatch,
  actions: {
    alert: bindActionCreators(actionCreators.alert, dispatch),
    auth: bindActionCreators(actionCreators.auth, dispatch)
  }
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Login extends React.Component {
  static propTypes = {
    auth: PropTypes.object,
    error: PropTypes.any,
    dispatch: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };
  state = {
    email: '',
    password: '',
    isLoading: false,
    redirectTo: this.props.location.query.redirect || '/'
  };
  constructor(props) {

    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {

    if (this.props.auth.user) {
      this.props.dispatch(push(this.state.redirectTo));
    }
  }
  componentDidMount() {

    NProgress.done();
  }
  hasValidationError(validationKey) {

    return (get(this.props.error, 'validation.keys') && this.props.error.validation.keys.includes(validationKey)) ? true : false;
  }
  handleLogin(event) {

    event.preventDefault();
    this.setState({ isLoading: true }, () => {

      const { email, password } = this.state;
      this.props.actions.auth.login({ email, password })
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
              <Form.Field error={this.hasValidationError('password')}>
                <label>Password</label>
                <Input
                  className="left icon"
                  icon='lock'
                  label={<Link to="/recovery" className="ui tag label">
                    <Icon name="help circle" style={{ marginRight: 0 }} />
                  </Link>}
                  labelPosition='right'
                  name="password"
                  onChange={this.handleChange}
                  placeholder="Password"
                  type="password"
                  value={this.state.password}
                />
              </Form.Field>
              <Button fluid primary
                disabled={this.state.isLoading}
                loading={this.state.isLoading}
                onClick={this.handleLogin}
                content='Login'
              />
            </Form>
          </Segment>
          <Segment>
            <Message style={{ textAlign: 'center' }}>
              New to us? <Link to='/signup'>Sign Up</Link>
            </Message>
          </Segment>
        </Grid.Column>
        <Grid.Column width='4' only='computer' />
      </Grid>
    );
  }

}
