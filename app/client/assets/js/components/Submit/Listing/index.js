import get from 'lodash/get';
import startsWith from 'lodash/startsWith';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push, replace } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'actions';
import { Button, Divider, Dropdown, Form, Icon, Input, Label, Segment, TextArea } from 'semantic-ui-react';
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
    isUploading: false,
    listing: {
      amenities: [],
      city: '',
      country: 'us',
      description: '',
      email: '',
      location: '',
      phone: '',
      price: '',
      uploads: [],
      state: '',
      street: '',
      terms: '',
      termType: 'flat_rate',
      type: '',
      vhfChannel: '',
      zip: ''
    }
  };
  constructor(props) {

    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleContinue = this.handleContinue.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handleAmenityChange = this.handleAmenityChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handlePaymentTermsChange = this.handlePaymentTermsChange.bind(this);
    this.handlePaymentTermTypeChange = this.handlePaymentTermTypeChange.bind(this);
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

    this.clearTusStorage();
    this.props.setActiveStep(false);
  }
  componentDidMount() {

    this.clearTusStorage();
    this.handleSelectPhotosChanges();
    NProgress.done();
  }
  hasValidationError(validationKey) {

    return (get(this.props.error, 'validation.keys') && this.props.error.validation.keys.includes(validationKey)) ? true : false;
  }
  clearTusStorage() {

    for (const resumableKey in localStorage) {
      if (startsWith(resumableKey, 'tus')) {
        localStorage.removeItem(resumableKey);
      }
    }
  }
  handleContinue(event) {

    event.preventDefault();
    this.setState({ isLoading: true }, () => {

      const { listing } = this.state;
      this.props.actions.listings.create({ ...listing })
        .then((response) => {

          this.clearTusStorage();
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
  handleLocationChange(event, data) {

    this.setState({ listing: { ...this.state.listing, location: data.value } });
  }
  handleTypeChange(event, data) {

    this.setState({ listing: { ...this.state.listing, type: data.value } });
  }
  handlePaymentTermsChange(event, data) {

    this.setState({ listing: { ...this.state.listing, terms: data.value } });
  }
  handlePaymentTermTypeChange(event, data) {

    this.setState({ listing: { ...this.state.listing, termType: data.value } });
  }
  handleCountryChange(event, data) {

    this.setState({ listing: { ...this.state.listing, country: data.value } });
  }
  componentDidMount() {

    this.handleSelectPhotosChanges();
  }
  processFileUploads() {

    this.setState({ isUploading: true });
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

          this.setState({ isUploading: false }, () => this.props.actions.alert.error(error));
          NProgress.done();
        },
        onProgress: (bytesUploaded, bytesTotal) => {

          this.setState({ isUploading: true });
          const percentage = (bytesUploaded / bytesTotal * 100).toFixed(2);
          NProgress.set(percentage / 100);
        },
        onSuccess: () => {

          const fingerprint = new RegExp('.*/uploads/(.*)$').exec(upload.url)[1];
          const uploads = this.state.listing.uploads;
          if (!uploads.includes(fingerprint)) {
            uploads.push(fingerprint);
            this.setState({ isUploading: false, listing: { ...this.state.listing, uploads } });
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

    const stateOptions = [
      { key: 'AL', value: 'Alabama', text: 'Alabama' },
      { key: 'AK', value: 'Alaska', text: 'Alaska' },
      { key: 'AS', value: 'American Samoa', text: 'American Samoa' },
      { key: 'AZ', value: 'Arizona', text: 'Arizona' },
      { key: 'AR', value: 'Arkansas', text: 'Arkansas' },
      { key: 'CA', value: 'California', text: 'California' },
      { key: 'CO', value: 'Colorado', text: 'Colorado' },
      { key: 'CT', value: 'Connecticut', text: 'Connecticut' },
      { key: 'DE', value: 'Delaware', text: 'Delaware' },
      { key: 'DC', value: 'District Of Columbia', text: 'District Of Columbia' },
      { key: 'FM', value: 'Federated States Of Micronesia', text: 'Federated States Of Micronesia' },
      { key: 'FL', value: 'Florida', text: 'Florida' },
      { key: 'GA', value: 'Georgia', text: 'Georgia' },
      { key: 'GU', value: 'Guam', text: 'Guam' },
      { key: 'HI', value: 'Hawaii', text: 'Hawaii' },
      { key: 'ID', value: 'Idaho', text: 'Idaho' },
      { key: 'IL', value: 'Illinois', text: 'Illinois' },
      { key: 'IN', value: 'Indiana', text: 'Indiana' },
      { key: 'IA', value: 'Iowa', text: 'Iowa' },
      { key: 'KS', value: 'Kansas', text: 'Kansas' },
      { key: 'KY', value: 'Kentucky', text: 'Kentucky' },
      { key: 'LA', value: 'Louisiana', text: 'Louisiana' },
      { key: 'ME', value: 'Maine', text: 'Maine' },
      { key: 'MH', value: 'Marshall Islands', text: 'Marshall Islands' },
      { key: 'MD', value: 'Maryland', text: 'Maryland' },
      { key: 'MA', value: 'Massachusetts', text: 'Massachusetts' },
      { key: 'MI', value: 'Michigan', text: 'Michigan' },
      { key: 'MN', value: 'Minnesota', text: 'Minnesota' },
      { key: 'MS', value: 'Mississippi', text: 'Mississippi' },
      { key: 'MO', value: 'Missouri', text: 'Missouri' },
      { key: 'MT', value: 'Montana', text: 'Montana' },
      { key: 'NE', value: 'Nebraska', text: 'Nebraska' },
      { key: 'NV', value: 'Nevada', text: 'Nevada' },
      { key: 'NH', value: 'New Hampshire', text: 'New Hampshire' },
      { key: 'NJ', value: 'New Jersey', text: 'New Jersey' },
      { key: 'NM', value: 'New Mexico', text: 'New Mexico' },
      { key: 'NY', value: 'New York', text: 'New York' },
      { key: 'NC', value: 'North Carolina', text: 'North Carolina' },
      { key: 'ND', value: 'North Dakota', text: 'North Dakota' },
      { key: 'MP', value: 'Northern Mariana Islands', text: 'Northern Mariana Islands' },
      { key: 'OH', value: 'Ohio', text: 'Ohio' },
      { key: 'OK', value: 'Oklahoma', text: 'Oklahoma' },
      { key: 'OR', value: 'Oregon', text: 'Oregon' },
      { key: 'PW', value: 'Palau', text: 'Palau' },
      { key: 'PA', value: 'Pennsylvania', text: 'Pennsylvania' },
      { key: 'PR', value: 'Puerto Rico', text: 'Puerto Rico' },
      { key: 'RI', value: 'Rhode Island', text: 'Rhode Island' },
      { key: 'SC', value: 'South Carolina', text: 'South Carolina' },
      { key: 'SD', value: 'South Dakota', text: 'South Dakota' },
      { key: 'TN', value: 'Tennessee', text: 'Tennessee' },
      { key: 'TX', value: 'Texas', text: 'Texas' },
      { key: 'UT', value: 'Utah', text: 'Utah' },
      { key: 'VT', value: 'Vermont', text: 'Vermont' },
      { key: 'VI', value: 'Virgin Islands', text: 'Virgin Islands' },
      { key: 'VA', value: 'Virginia', text: 'Virginia' },
      { key: 'WA', value: 'Washington', text: 'Washington' },
      { key: 'WV', value: 'West Virginia', text: 'West Virginia' },
      { key: 'WI', value: 'Wisconsin', text: 'Wisconsin' },
      { key: 'WY', value: 'Wyomin', text: 'Wyomin' }
    ];
    const amenityOptions = [
      { key: 'accessibility', value: 'accessibility', text: '24 Hour Accessibility' },
      { key: 'alcohol', value: 'alcohol', text: 'Alcohol' },
      { key: 'anchorage', value: 'anchorage', text: 'Anchorage' },
      { key: 'bait_tackle', value: 'bait_tackle', text: 'Bait & Tackle' },
      { key: 'beach', value: 'beach', text: 'Beach' },
      { key: 'bike_rentals', value: 'bike_rentals', text: 'Bike Rentals' },
      { key: 'boat_ramp', value: 'boat_ramp', text: 'Boat Ramp' },
      { key: 'cable_tv_hookup', value: 'cable_tv_hookup', text: 'Cable TV Hookup' },
      { key: 'car_rentals', value: 'car_rentals', text: 'Car Rentals' },
      { key: 'club_house', value: 'club_house', text: 'Club House' },
      { key: 'covered_slips', value: 'covered_slips', text: 'Covered Slips' },
      { key: 'deep_water', value: 'deep_water', text: 'Deep Water' },
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
      { key: 'internet', value: 'internet', text: 'Internet' },
      { key: 'laundry', value: 'laundry', text: 'Laundry' },
      { key: 'live_aboard_allowed', value: 'live_aboard_allowed', text: 'Live Aboard Allowed' },
      { key: 'maintenance_facility', value: 'maintenance_facility', text: 'Maintenance Facility' },
      { key: 'medical_facility', value: 'medical_facility', text: 'Medical Facility' },
      { key: 'moorings', value: 'moorings', text: 'Moorings' },
      { key: 'ocean_access', value: 'ocean_access', text: 'Ocean Access' },
      { key: 'oil_disposal', value: 'oil_disposal', text: 'Oil Disposal' },
      { key: 'pharmacy', value: 'pharmacy', text: 'Pharmacy' },
      { key: 'pool', value: 'pool', text: 'Pool' },
      { key: 'propane', value: 'propane', text: 'Propane' },
      { key: 'propeller_service', value: 'propeller_service', text: 'Propeller Service' },
      { key: 'pumpout', value: 'pumpout', text: 'Pump-out' },
      { key: 'rack_storage', value: 'rack_storage', text: 'Rack Storage' },
      { key: 'repair_crane', value: 'repair_crane', text: 'Repair Crane' },
      { key: 'restaurants', value: 'restaurants', text: 'Restaurants' },
      { key: 'restrooms', value: 'restrooms', text: 'Restrooms' },
      { key: 'ship_store', value: 'ship_store', text: 'Ship Store' },
      { key: 'showers', value: 'showers', text: 'Showers' },
      { key: 'telephone_hookup', value: 'telephone_hookup', text: 'Telephone Hookup' },
      { key: 'tennis', value: 'tennis', text: 'Tennis' },
      { key: 'trash', value: 'trash', text: 'Trash' },
      { key: 'trailer_storage', value: 'trailer_storage', text: 'Trailer Storage' },
      { key: 'travel_lift', value: 'travel_lift', text: 'Travel Lift' },
      { key: 'water_hookup', value: 'water_hookup', text: 'Water Hookup' },
      { key: 'water_taxi', value: 'water_taxi', text: 'Water Taxi' },
      { key: 'winter_storage', value: 'winter_storage', text: 'Winter Storage' },
      { key: 'yacht_brokerage', value: 'yacht_brokerage', text: 'Yacht Brokerage' }
    ];
    const typeOptions = [
      { key: 'dock', value: 'dock', text: 'Dock' },
      { key: 'dry_storage', value: 'dry_storage', text: 'Dry Storage' },
      { key: 'mooring', value: 'mooring', text: 'Mooring Buoy' },
      { key: 'slip', value: 'slip', text: 'Slip' }
    ];
    const locationOptions = [
      { key: 'condo', value: 'condo', text: 'Condo' },
      { key: 'home', value: 'home', text: 'Home' },
      { key: 'marina', value: 'marina', text: 'Marina' },
      { key: 'vacant_lot', value: 'vacant_lot', text: 'Vacant Lot' }
    ];
    const paymentTermsOptions = [
      { key: 'sale', value: 'sale', text: 'For Sale' },
      { key: 'rent', value: 'rent', text: 'For Rent' }
    ];
    const paymentTermTypeOptions = [
      { key: 'flat_rate', value: 'flat_rate', text: 'Flat Rate' },
      { key: 'by_foot', value: 'by_foot', text: 'By Foot' }
    ];
    const countryOptions = [
      { key: 'us', value: 'us', flag: 'us', text: 'United States' }
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
            <Form.Field error={this.hasValidationError('location')} width='3'>
              <label>Location</label>
              <Dropdown fluid search selection
                placeholder='Property'
                options={locationOptions}
                name="location"
                onChange={this.handleLocationChange}
                value={this.state.listing.location}
              />
            </Form.Field>
            <Form.Field error={this.hasValidationError('type')} width='4'>
              <label>Type</label>
              <Dropdown fluid search selection
                placeholder='Dockage'
                options={typeOptions}
                name="type"
                onChange={this.handleTypeChange}
                value={this.state.listing.type}
              />
            </Form.Field>
            <Form.Field error={this.hasValidationError('terms')} width='3'>
              <label>Pricing</label>
              <Dropdown fluid search selection
                placeholder='Rent or Sale'
                options={paymentTermsOptions}
                name="terms"
                onChange={this.handlePaymentTermsChange}
                value={this.state.listing.terms}
              />
            </Form.Field>
            <Form.Field error={this.hasValidationError('price')} width='6'>
              <label>Cost</label>
                <Input
                  name='price'
                  labelPosition='right'
                >
                  <Label>
                    <Icon name='dollar' />
                  </Label>
                  <input
                    placeholder='US Dollars'
                    onChange={this.handleChange}
                    value={this.state.listing.price}
                  />
                  <Label>
                    <Dropdown
                        options={paymentTermTypeOptions}
                        name="termType"
                        onChange={this.handlePaymentTermTypeChange}
                        value={this.state.listing.termType}
                      />
                  </Label>
                </Input>
            </Form.Field>
          </Form.Group>
          <Divider horizontal>
            <Icon circular
              name='marker'
              color='blue'
            />
          </Divider>
          <Form.Group>
            <Form.Field error={this.hasValidationError('street')} width='16'>
              <label>Street</label>
              <Input
                name="street"
                onChange={this.handleChange}
                icon='marker'
                placeholder='Street'
                type="text"
                value={this.state.listing.street}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group>
            <Form.Field error={this.hasValidationError('city')} width='6'>
              <label>City</label>
              <Input
                name="city"
                onChange={this.handleChange}
                icon='marker'
                placeholder='City'
                type="text"
                value={this.state.listing.city}
              />
            </Form.Field>
            <Form.Field error={this.hasValidationError('state')} width='6'>
              <label>State</label>
              <Dropdown fluid search selection
                placeholder='State'
                options={stateOptions}
                name="state"
                onChange={this.handleStateChange}
                value={this.state.listing.state}
              />
            </Form.Field>
            <Form.Field error={this.hasValidationError('zip')} width='4'>
              <label>ZIP Code</label>
              <Input
                name="zip"
                onChange={this.handleChange}
                icon='marker'
                placeholder='ZIP Code'
                type="text"
                value={this.state.listing.zip}
              />
            </Form.Field>
            <Form.Field error={this.hasValidationError('country')} width='7'>
              <label>Country</label>
              <Dropdown fluid search selection
                placeholder='Country'
                options={countryOptions}
                name="country"
                onChange={this.handleCountryChange}
                value={this.state.listing.country}
              />
            </Form.Field>
          </Form.Group>
          <Divider horizontal>
            <Icon circular
              name='conversation'
              color='blue'
            />
          </Divider>
          <Form.Group>
            <Form.Field error={this.hasValidationError('name')} width={8}>
              <label>Name</label>
              <Input
                name="name"
                onChange={this.handleChange}
                icon='user'
                placeholder='Name'
                type="text"
                value={this.state.listing.name}
              />
            </Form.Field>
            <Form.Field error={this.hasValidationError('phone')}  width={5}>
              <label>Phone</label>
              <Input
                name="phone"
                onChange={this.handleChange}
                icon='phone'
                placeholder='Phone'
                type="text"
                value={this.state.listing.phone}
              />
            </Form.Field>
            <Form.Field error={this.hasValidationError('vhfChannel')} width={3}>
              <label>VHF Channel</label>
              <Input
                name="vhfChannel"
                onChange={this.handleChange}
                icon='signal'
                placeholder='VHF Channel'
                type="text"
                value={this.state.listing.vhfChannel}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Field error={this.hasValidationError('email')}>
              <label>Email</label>
              <Input
                name="email"
                onChange={this.handleChange}
                icon='mail'
                placeholder='Email'
                type="text"
                value={this.state.listing.email}
              />
            </Form.Field>
            <Form.Field error={this.hasValidationError('website')}>
              <label>Website</label>
              <Input
                name="website"
                onChange={this.handleChange}
                icon='world'
                placeholder='Website URL'
                type="text"
                value={this.state.listing.website}
              />
            </Form.Field>
          </Form.Group>
          <Divider horizontal>
            <Icon circular
              name='anchor'
              color='blue'
            />
          </Divider>
          <Form.Group>
            <Form.Field error={this.hasValidationError('length')} width={4}>
              <label>Max Length</label>
              <Input
                name="length"
                onChange={this.handleChange}
                label='ft'
                labelPosition='right'
                placeholder='Max Length'
                type="text"
                value={this.state.listing.length}
              />
            </Form.Field>
            <Form.Field error={this.hasValidationError('beam')} width={4}>
              <label>Max Beam</label>
              <Input
                name="beam"
                onChange={this.handleChange}
                label='ft'
                labelPosition='right'
                placeholder='Max Beam'
                type="text"
                value={this.state.listing.beam}
              />
            </Form.Field>
            <Form.Field error={this.hasValidationError('draw')} width={4}>
              <label>Max Draw</label>
              <Input
                name="draw"
                onChange={this.handleChange}
                label='ft'
                labelPosition='right'
                placeholder='Max Draw'
                type="text"
                value={this.state.listing.draw}
              />
            </Form.Field>
            <Form.Field error={this.hasValidationError('clearance')} width={4}>
              <label>Max Clearance</label>
              <Input
                name="clearance"
                onChange={this.handleChange}
                label='ft'
                labelPosition='right'
                placeholder='Max Clearance'
                type="text"
                value={this.state.listing.clearance}
              />
            </Form.Field>
          </Form.Group>
          <Divider horizontal>
            <Icon circular
              name='list'
              color='blue'
            />
          </Divider>
          <Form.Field error={this.hasValidationError('amenities')}>
            <label>Amenities</label>
            <Dropdown fluid search selection multiple
              placeholder='Amenities'
              options={amenityOptions}
              name="amenities"
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
            disabled={this.state.isUploading}
            loading={this.state.isUploading}
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
