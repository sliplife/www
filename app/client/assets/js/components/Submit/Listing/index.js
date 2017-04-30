import get from 'lodash/get';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push, replace } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'actions';
import { Button, Divider, Dropdown, Form, Icon, Input, Segment, TextArea } from 'semantic-ui-react';
import { NProgress } from 'components';
import tus from 'tus-js-client';

const mapStateToProps = (state) => ({
  auth: state.auth,
  error: state.listings.error
});
const mapDispatchToProps = (dispatch) => ({
  dispatch,
  actions: {
    alert: bindActionCreators(actionCreators.alert, dispatch),
    listings: bindActionCreators(actionCreators.listings, dispatch),
    uploads: bindActionCreators(actionCreators.uploads, dispatch)
  }
});

@connect(mapStateToProps, mapDispatchToProps)
export default class SubmitListing extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
    error: PropTypes.any,
    actions: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    setActiveStep: PropTypes.func.isRequired,
    setCompletedStep: PropTypes.func.isRequired,
    steps: PropTypes.object.isRequired
  };
  state = {
    isLoading: true,
    listing: {
      amenities: [],
      city: '',
      description: '',
      uploads: [],
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
    this.handleSelectPhotos = this.handleSelectPhotos.bind(this);
  }
  componentWillMount() {

    if (!this.props.auth.user) {
      return this.props.dispatch(replace('/submit'));
    }
    if (this.props.steps.listing.completed) {
      return this.props.dispatch(replace('/submit/billing'));
    }
    this.setState({ isLoading: false });
    this.props.setActiveStep('listing');
  }
  componentWillUnmount() {

    this.props.setActiveStep(false);
  }
  componentDidMount() {

    this.handleSelectPhotosChanges();
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
        .then((response) => {

          this.props.setCompletedStep('listing');
          this.props.dispatch(push('/submit/billing'));
        })
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
  componentDidMount() {

    this.handleSelectPhotosChanges();
  }
  processFileUploads() {

    const files = this.fileInput.files;
    // Get the selected upload(s) from the input element.
    for (const file of files) {
      // Create a new tus upload
      const upload = new tus.Upload(file, {
        resume: true,
        endpoint: '/api/uploads',
        headers: {
          // Authorization: ['Bearer', getAuthenticationToken()].join(' ')
        },
        onError: (error) => {

          this.setState({ isLoading: false }, () => this.props.actions.alert.error(error));
          NProgress.done();
        },
        onProgress: (bytesUploaded, bytesTotal) => {

          const percentage = (bytesUploaded / bytesTotal * 100).toFixed(2);
          NProgress.set(percentage / 100);
        },
        onSuccess: () => {

          const fingerprint = new RegExp('.*/uploads/(.*)$').exec(upload.url)[1];
          const uploads = this.state.listing.uploads;
          if (!uploads.includes(fingerprint)) {
            uploads.push(fingerprint);
            this.setState({ listing: { ...this.state.listing, uploads } });
          }
        }
      });
      // Start file upload.
      upload.start();
    }
  }
  handleSelectPhotos(event) {

    event.preventDefault();
    this.fileInput.click();
  }
  handleSelectPhotosChanges() {

    this.fileInput.addEventListener('change', (event) => this.processFileUploads());
  }
  render() {

    const stateOptions = [{ key: 'fl', value: 'Florida', text: 'Florida' }];
    const amenityOptions = [
      { key: 'alcohol', value: 'alcohol', text: 'Alcohol' },
      { key: 'anchorage', value: 'anchorage', text: 'Anchorage' },
      { key: 'bait_tackle', value: 'bait_tackle', text: 'Bait & Tackle' },
      { key: 'beach', value: 'beach', text: 'Beach' },
      { key: 'bike_rentals', value: 'bike_rentals', text: 'Bike Rentals' },
      { key: 'boat_ramp', value: 'boat_ramp', text: 'Boat Ramp' },
      { key: 'car_rentals', value: 'car_rentals', text: 'Car Rentals' },
      { key: 'covered_slips', value: 'covered_slips', text: 'Covered Slips' },
      { key: 'diesel', value: 'diesel', text: 'Diesel' },
      { key: 'dinghy_dock', value: 'dinghy_dock', text: 'Dinghy Dock' },
      { key: 'dockage', value: 'dockage', text: 'Dockage' },
      { key: 'dog_park', value: 'dog_park', text: 'Dog Park' },
      { key: 'dry_storage', value: 'dry_storage', text: 'Dry Storage' },
      { key: 'electricity', value: 'electricity', text: 'Electricity' },
      { key: 'engine_service', value: 'engine_service', text: 'Engine Service' },
      { key: 'fitness_center', value: 'fitness_center', text: 'Fitness Center' },
      { key: 'fixed_docks', value: 'fixed_docks', text: 'Fixed Docks' },
      { key: 'floating_docks', value: 'floating_docks', text: 'Floating Docks' },
      { key: 'fuel_dock', value: 'fuel_dock', text: 'Fuel Dock' },
      { key: 'gas', value: 'gas', text: 'Gas' },
      { key: 'golf', value: 'golf', text: 'Golf' },
      { key: 'groceries', value: 'groceries', text: 'Groceries' },
      { key: 'hotels', value: 'hotels', text: 'Hotels' },
      { key: 'ice', value: 'ice', text: 'Ice' },
      { key: 'laundry', value: 'laundry', text: 'Laundry' },
      { key: 'maintenance_facility', value: 'maintenance_facility', text: 'Maintenance Facility' },
      { key: 'medical_facility', value: 'medical_facility', text: 'Medical Facility' },
      { key: 'moorings', value: 'moorings', text: 'Moorings' },
      { key: 'oil_disposal', value: 'oil_disposal', text: 'Oil Disposal' },
      { key: 'pharmacy', value: 'pharmacy', text: 'Pharmacy' },
      { key: 'propane', value: 'propane', text: 'Propane' },
      { key: 'propeller_service', value: 'propeller_service', text: 'Propeller Service' },
      { key: 'pumpout', value: 'pumpout', text: 'Pump-out' },
      { key: 'rack_storage', value: 'rack_storage', text: 'Rack Storage' },
      { key: 'repair_crane', value: 'repair_crane', text: 'Repair Crane' },
      { key: 'restaurants', value: 'restaurants', text: 'Restaurants' },
      { key: 'restrooms', value: 'restrooms', text: 'Restrooms' },
      { key: 'ship_store', value: 'ship_store', text: 'Ship Store' },
      { key: 'showers', value: 'showers', text: 'Showers' },
      { key: 'tennis', value: 'tennis', text: 'Tennis' },
      { key: 'trash', value: 'trash', text: 'Trash' },
      { key: 'trailer_storage', value: 'trailer_storage', text: 'Trailer Storage' },
      { key: 'travel_lift', value: 'travel_lift', text: 'Travel Lift' },
      { key: 'water_hookup', value: 'water_hookup', text: 'Water Hookup' },
      { key: 'water_taxi', value: 'water_taxi', text: 'Water Taxi' },
      { key: 'wifi', value: 'wifi', text: 'Wi-Fi' },
      { key: 'winter_storage', value: 'winter_storage', text: 'Winter Storage' },
      { key: 'yacht_brokerage', value: 'yacht_brokerage', text: 'Yacht Brokerage' }
    ];
    const typeOptions = [
      { key: 'marina', value: 'marina', text: 'Marina' },
      { key: 'rack', value: 'rack', text: 'Rack' },
      { key: 'trailer', value: 'trailer', text: 'Trailer' }
    ];

    return (
      <div>
        <Segment as={Form} loading={this.state.isLoading}>
          <input multiple
            type='file'
            style={{ display: 'none' }}
            ref={(input) => {

              this.fileInput = input;
            }}
          />
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
            content={`Select Photos (${this.state.listing.uploads.length})`}
            onClick={this.handleSelectPhotos}
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
