import get from 'lodash/get';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'actions';
import { Button, Divider, Dropdown, Form, Icon, Input, Message, Segment, TextArea } from 'semantic-ui-react';
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
export default class Submit extends React.Component {
  static propTypes = {
    auth: PropTypes.object,
    error: PropTypes.any,
    dispatch: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };
  state = {
    amenities: [],
    city: '',
    description: '',
    state: '',
    type: '',
    isLoading: false
  };
  constructor(props) {

    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleAmenityChange = this.handleAmenityChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
  }
  componentDidMount() {

    NProgress.done();
  }
  componentDidUpdate() {

    NProgress.done();
  }
  hasValidationError(validationKey) {

    return (get(this.props.error, 'validation.keys') && this.props.error.validation.keys.includes(validationKey)) ? true : false;
  }
  handleSubmit(event) {

    event.preventDefault();
    this.setState({ isLoading: true }, () => {

      const { title } = this.state;
      this.props.actions.listings.create({ title })
        .then(() => this.props.dispatch(push('/')))
        .catch((error) => {

          this.setState({ isLoading: false });
          this.props.actions.alert.error(error.message);
        });
    });
  }
  handleChange(event) {

    this.setState({ [event.target.name]: event.target.value });
  }
  handleStateChange(event, data) {

    this.setState({ state: data.value });
  }
  handleAmenityChange(event, data) {

    this.setState({ amenities: data.value });
  }
  handleTypeChange(event, data) {

    this.setState({ type: data.value });
  }
  render() {

    const stateOptions = [{ key: 'fl', value: 'fl', text: 'Florida' }];
    const amenityOptions = [
      { key: 'cable', value: 'cable', text: 'Cable' },
      { key: 'electricity', value: 'electricity', text: 'Electricity' },
      { key: 'internet', value: 'internet', text: 'Internet' },
      { key: 'water', value: 'water', text: 'Water' }
    ];
    const typeOptions = [
      { key: 'marina', value: 'marina', text: 'Marina' },
      { key: 'rack', value: 'rack', text: 'Rack' },
      { key: 'trailer', value: 'trailer', text: 'Trailer' }
    ];

    return (
      <Segment as={Form} attached='bottom'>
        <Form.Group>
          <Form.Field error={this.hasValidationError('type')} width='4'>
            <label>Type</label>
            <Dropdown fluid search selection
              placeholder='Type'
              options={typeOptions}
              name="type"
              onChange={this.handleTypeChange}
              value={this.state.type}
            />
          </Form.Field>
          <Form.Field error={this.hasValidationError('city')} width='7'>
            <label>City</label>
            <Input
              name="city"
              onChange={this.handleChange}
              placeholder='City'
              type="text"
              value={this.state.city}
            />
          </Form.Field>
          <Form.Field error={this.hasValidationError('state')} width='5'>
            <label>State</label>
            <Dropdown fluid search selection
              placeholder='State'
              options={stateOptions}
              name="state"
              onChange={this.handleStateChange}
              value={this.state.state}
            />
          </Form.Field>
        </Form.Group>
        <Form.Field error={this.hasValidationError('amenities')}>
          <label>Amenities</label>
          <Dropdown fluid search selection multiple
            placeholder='Amenities'
            options={amenityOptions}
            name="state"
            onChange={this.handleAmenityChange}
            value={this.state.amenities}
          />
        </Form.Field>
        <Form.Field error={this.hasValidationError('description')}>
          <label>Description</label>
          <TextArea
            name="description"
            onChange={this.handleChange}
            placeholder='Description'
            type="text"
            value={this.state.description}
          />
        </Form.Field>
        <Divider horizontal>
          <Icon circular
            name='photo'
            color='blue'
          />
        </Divider>
        <Segment>
          <Button fluid
            content='Select Photos'
          />
        </Segment>
        <Divider horizontal>
          <Icon circular
            name='cart'
            color='blue'
          />
        </Divider>
        <Message info>
          <Message.Header>Terms of Service</Message.Header>
          <p>
            <em>There is a one-time charge of <strong>$10.00 USD</strong> to use
            this service.</em> Listings will remain active on this website for
            30 days and appear immediately upon successful processing of payment.
            An email receipt of this transaction will be sent to you. After 30
            days you'll receive another email giving you the option to renew the
            listing.
          </p>
        </Message>
        <Form.Group>
          <Form.Field error={this.hasValidationError('cardNumber')} width='6'>
            <label>Card Number</label>
            <Input
              icon='credit card alternative'
              iconPosition='left'
              name="cardNumber"
              onChange={this.handleChange}
              placeholder='Card Number'
              type="text"
              value={this.state.cardNumber}
            />
          </Form.Field>
          <Form.Field error={this.hasValidationError('cardExpirationMonth')} width='4'>
            <label>Expiration Month</label>
            <Input
              name="cardExpirationMonth"
              onChange={this.handleChange}
              placeholder='Expiration Month'
              type="text"
              value={this.state.cardExpirationMonth}
            />
          </Form.Field>
          <Form.Field error={this.hasValidationError('cardExpirationYear')} width='4'>
            <label>Expiration Year</label>
            <Input
              name="cardExpirationYear"
              onChange={this.handleChange}
              placeholder='Expiration Year'
              type="text"
              value={this.state.cardExpirationYear}
            />
          </Form.Field>
          <Form.Field error={this.hasValidationError('cardCvc')} width='2'>
            <label>CVC</label>
            <Input
              name="cardCVC"
              onChange={this.handleChange}
              placeholder='CVC'
              type="text"
              value={this.state.cardCVC}
            />
          </Form.Field>
        </Form.Group>
        <Button fluid primary
          disabled={this.state.isLoading}
          loading={this.state.isLoading}
          onClick={this.handleSubmit}
          content='Create'
        />
      </Segment>
    );
  }

}
