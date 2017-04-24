import get from 'lodash/get';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'actions';
import { Button, Divider, Dropdown, Form, Icon, Input, Segment, TextArea } from 'semantic-ui-react';
import { NProgress } from 'components';

const mapStateToProps = (state) => ({
  error: state.listings.error
});
const mapDispatchToProps = (dispatch) => ({
  dispatch,
  actions: {
    alert: bindActionCreators(actionCreators.alert, dispatch),
    listings: bindActionCreators(actionCreators.listings, dispatch)
  }
});

@connect(mapStateToProps, mapDispatchToProps)
export default class SubmitListing extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    error: PropTypes.object,
    actions: PropTypes.object.isRequired,
    setActiveStep: PropTypes.func.isRequired,
    setCompletedSteps: PropTypes.func.isRequired,
    steps: PropTypes.object.isRequired
  };
  state = {
    isLoading: true,
    listing: {
      amenities: [],
      city: '',
      description: '',
      state: '',
      type: ''
    }
  };
  constructor(props) {

    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleContinue = this.handleContinue.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleAmenityChange = this.handleAmenityChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
  }
  componentWillMount() {

    this.setState({ isLoading: false });
    this.props.setActiveStep('listing');
    this.props.setCompletedSteps();
  }
  componentWillUnmount() {

    this.props.setActiveStep(false);
  }
  componentDidMount() {

    NProgress.done();
  }
  hasValidationError(validationKey) {

    return (get(this.props.error, 'validation.keys') && this.props.error.validation.keys.includes(validationKey)) ? true : false;
  }
  handleContinue(event) {

    event.preventDefault();
    this.setState({ isLoading: true }, () => {

      const { listing } = this.state;
      this.props.actions.listings.create({ ...listing })
        .then(() => this.props.dispatch(push('/')))
        .catch((error) => {

          this.setState({ isLoading: false });
          this.props.actions.alert.error(error.message);
        });
    });
  }
  handleChange(event) {

    const { listing } = this.state;
    listing[event.target.name] = event.target.value;
    this.setState({ listing });
  }
  handleStateChange(event, data) {

    this.setState({ listing: { ...this.state.listing, state: data.value } });
  }
  handleAmenityChange(event, data) {

    this.setState({ listing: { ...this.state.listing, amenities: data.value } });
  }
  handleTypeChange(event, data) {

    this.setState({ listing: { ...this.state.listing, type: data.value } });
  }
  render() {

    const stateOptions = [{ key: 'fl', value: 'Florida', text: 'Florida' }];
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
      <div>
        <Segment as={Form}>
          <Form.Group>
            <Form.Field error={this.hasValidationError('type')} width='4'>
              <label>Type</label>
              <Dropdown fluid search selection
                placeholder='Type'
                options={typeOptions}
                name="type"
                onChange={this.handleTypeChange}
                value={this.state.listing.type}
              />
            </Form.Field>
            <Form.Field error={this.hasValidationError('city')} width='7'>
              <label>City</label>
              <Input
                name="city"
                onChange={this.handleChange}
                placeholder='City'
                type="text"
                value={this.state.listing.city}
              />
            </Form.Field>
            <Form.Field error={this.hasValidationError('state')} width='5'>
              <label>State</label>
              <Dropdown fluid search selection
                placeholder='State'
                options={stateOptions}
                name="state"
                onChange={this.handleStateChange}
                value={this.state.listing.state}
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
              value={this.state.listing.amenities}
            />
          </Form.Field>
          <Form.Field error={this.hasValidationError('description')}>
            <label>Description</label>
            <TextArea
              name="description"
              onChange={this.handleChange}
              placeholder='Description'
              type="text"
              value={this.state.listing.description}
            />
          </Form.Field>
          <Divider horizontal>
            <Icon circular
              name='photo'
              color='blue'
            />
          </Divider>
          <Button fluid
            content='Select Photos'
          />
        </Segment>
        <Segment>
          <Button fluid primary
            disabled={this.state.isLoading}
            loading={this.state.isLoading}
            onClick={this.handleContinue}
            icon='right arrow'
            labelPosition='right'
            content='Continue'
          />
        </Segment>
      </div>
    );
  }

}
