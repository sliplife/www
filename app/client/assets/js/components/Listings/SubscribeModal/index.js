import get from 'lodash/get';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Form, Header, Icon, Input, Label, Message, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'actions';

const mapStateToProps = (state) => ({
  subscriptions: state.subscriptions,
  error: state.subscriptions.error
});
const mapDispatchToProps = (dispatch) => ({
  dispatch,
  actions: {
    alert: bindActionCreators(actionCreators.alert, dispatch),
    subscriptions: bindActionCreators(actionCreators.subscriptions, dispatch)
  }
});

@connect(mapStateToProps, mapDispatchToProps)
export default class SubscribeModal extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    error: PropTypes.any,
    getFilterHashObject: PropTypes.func.isRequired,
    getFilterMessage: PropTypes.func.isRequired,
    isSubscribeModalOpen: PropTypes.bool.isRequired,
    subscribeModalOpen: PropTypes.func.isRequired,
    subscribeModalClose: PropTypes.func.isRequired
  };
  constructor(props) {

    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubscribe = this.handleSubscribe.bind(this);
    this.state = {
      isLoading: false,
      subscription: {
        email: '',
        frequency: 'daily'
      }
    };
  }
  componentWillUnmount() {

    this.props.actions.subscriptions.reset();
  }
  hasValidationError(validationKey) {

    return (get(this.props.error, 'validation.keys') && this.props.error.validation.keys.includes(validationKey)) ? true : false;
  }
  handleEmailChange(event) {

    const subscription = this.state.subscription;
    this.setState({ subscription: { ...subscription, email: event.target.value } });
  }
  handleFrequencyChange(frequency) {

    const subscription = this.state.subscription;
    this.setState({ subscription: { ...subscription, frequency } });
  }
  handleSubscribe(event) {

    event.preventDefault();
    this.setState({ isLoading: true }, () => {

      this.props.actions.subscriptions.create({
        filter: this.props.getFilterHashObject(),
        description: this.props.getFilterMessage(),
        ...this.state.subscription
      })
        .then((response) => {

          this.setState({ isLoading: false }, () => {

            this.props.subscribeModalClose();
          });
        })
        .catch((error) => {

          this.setState({ isLoading: false }, () => {

            this.props.actions.alert.error(error.message, '.modal > .content');
          });
        });
    });
  }
  render() {

    return (
      <Modal
        open={this.props.isSubscribeModalOpen}
        onClose={this.props.subscribeModalClose}
        trigger={<Label content='Create Alert' color='orange' icon='announcement' as={Link} onClick={this.props.subscribeModalOpen} />}
        closeIcon='close'
      >
        <Header icon='announcement' content='Subscribe to Notifications' style={{ textShadow: 'black 2px -1px 1px' }} />
        <Modal.Content>
          <p>
            Your criteria:&nbsp;
            <strong>
              {this.props.getFilterMessage()}
            </strong>
          </p>
          <Form>
            <Form.Field error={this.hasValidationError('email')}>
              <Input fluid focus
                size='large'
                icon='mail'
                label='Email Address'
                placeholder='email@address.com'
                onChange={this.handleEmailChange}
                value={this.state.subscription.email}
               />
            </Form.Field>
            <Form.Field>
              <Button.Group widths='2'>
                <Button secondary
                  active={this.state.subscription.frequency === 'daily'}
                  onClick={(event) => { event.preventDefault(); this.handleFrequencyChange('daily'); }}
                >
                  {this.state.subscription.frequency === 'daily' ? <Icon name='checkmark box'/> : ''} Daily
                </Button>
                <Button secondary
                  active={this.state.subscription.frequency === 'weekly'}
                  onClick={(event) => { event.preventDefault(); this.handleFrequencyChange('weekly'); }}
                >
                  {this.state.subscription.frequency === 'weekly' ? <Icon name='checkmark box'/> : ''} Weekly
                </Button>
              </Button.Group>
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button primary
            loading={this.state.isLoading}
            content='Subscribe'
            onClick={this.handleSubscribe}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}
