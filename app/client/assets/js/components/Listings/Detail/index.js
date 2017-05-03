import capitalize from 'lodash/capitalize';
import chunk from 'lodash/chunk';
import React, { PropTypes } from 'react';
import { FormattedNumber } from 'react-intl';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { Button, Divider, Grid, Icon, Item, Image, Label, Segment, Table } from 'semantic-ui-react';
import { CircleMarker, Map, Popup, TileLayer } from 'react-leaflet';
import Slider from 'react-slick';
import * as actionCreators from 'actions';
import { Loading, NProgress } from 'components';

const mapStateToProps = (state) => ({
  ...state.listings
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    listings: bindActionCreators(actionCreators.listings, dispatch)
  }
});

@connect(mapStateToProps, mapDispatchToProps)
export default class ListingsDetail extends React.Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    children: PropTypes.object,
    listing: PropTypes.object.isRequired,
    routeParams: PropTypes.object.isRequired
  };
  state = {
    isLoading: true,
    phone: false,
    email: false,
    showAmenities: false,
    photoSlideIndex: 1
  };
  constructor(props) {

    super(props);
    this.handleCallPhoneNumber = this.handleCallPhoneNumber.bind(this);
    this.WriteAnEmail = this.WriteAnEmail.bind(this);
    this.handleShowAmenities = this.handleShowAmenities.bind(this);
  }
  componentDidMount() {

    this.props.actions.listings.read(this.props.routeParams.id, { with: 'uploads' })
      .then(() => this.setState({ isLoading: false }, NProgress.done));
  }
  componentWillUnmount() {

    this.setState({ isLoading: true });
  }
  componentWillReceiveProps(nextProps) {

    if (nextProps.routeParams.id !== this.props.routeParams.id) {
      this.setState({ isLoading: true }, () => {

        this.props.actions.listings.read(nextProps.routeParams.id, { with: 'uploads' })
          .then(() => this.setState({ isLoading: false }, NProgress.done));
      });
    }
  }
  handleCallPhoneNumber() {

    const phone = this.props.listing.phone;
    this.setState({ phone }, () => {

      window.location.href = `tel:${phone}`;
    });
  }
  WriteAnEmail() {

    this.setState({ email: this.props.listing.email });
  }
  handleShowAmenities() {

    this.setState({ showAmenities: !this.state.showAmenities });
  }
  render() {

    const imageUrl = (this.state.isLoading === true || !this.props.listing.uploads[0]) ? '/assets/images/image.png' : `${this.props.listing.uploads[0].url}?width=480&height=400`;
    const position = [this.props.listing.latitude, this.props.listing.longitude];
    const map = (
      <Map center={position} zoom={12} style={{ height: '300px', width: 'auto' }} attributionControl={false} scrollWheelZoom={false}>
        <TileLayer
          url='https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}'
          attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          subdomains='abcd'
          minZoom={1}
          maxZoom={16}
          ext='png'
        />
      <CircleMarker center={position} radius={50} color='#0B4A76' fillColor='#0B4A76'>
          <Popup>
            <span>{this.props.listing.street}</span>
          </Popup>
        </CircleMarker>
      </Map>
    );
    const amenityOptions = [
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
    const visibleAmenityOptions = (!this.state.showAmenities) ? amenityOptions.splice(0, 4) : amenityOptions;
    const amenityRows = chunk(visibleAmenityOptions, 2).map((amenities) => {

      if (amenities.length < 2) { // Fill last empty cell if necessary.
        amenities.push({ key: null, value: '', text: '' });
      }
      const amenityCells = amenities.map((amenity) => {

        const disabledCell = <Table.Cell disabled>{amenity.text}</Table.Cell>;
        const positiveCell = <Table.Cell positive><Icon name='checkmark' /> {amenity.text}</Table.Cell>;
        const hasAmenity = (this.props.listing.amenities && this.props.listing.amenities.includes(amenity.value));
        return hasAmenity ? positiveCell : disabledCell;
      });
      return <Table.Row>{amenityCells}</Table.Row>;
    });
    const price = <FormattedNumber value={this.props.listing.price} style='currency' currency='usd' />;
    const imageLabel = <Label attached='top'>{price} {this.props.listing.termType === 'by_foot' ? 'per foot' : ''}</Label>;
    const sliderOptions = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      afterChange: (currentIndex) => this.setState({ photoSlideIndex: currentIndex + 1 })
    };
    return (this.state.isLoading === true) ? <Segment attached='bottom'><Loading /></Segment> :
      <div>
        <Segment attached='bottom'>
          <Item.Group>
            <Item>
              <Item.Image as={Link} to={`/listings/${this.props.listing.id}`} src={imageUrl} label={{ content: imageLabel }} />
              <Item.Content>
                <Item.Header as={Link} to={`/listings/${this.props.listing.id}`}>{this.props.listing.city}</Item.Header>
                <Item.Meta>
                  <span className='cinema'>{this.props.listing.state}, {this.props.listing.zip}</span>
                </Item.Meta>
                <Item.Description>{this.props.listing.description}</Item.Description>
                <Item.Extra>
                  {this.props.listing.isNew  ? <Label color='orange' size='mini'>New</Label> : null }
                  <Label size='mini'>{this.props.listing.typeName}</Label>
                  <Label size='mini'>For {capitalize(this.props.listing.terms)}</Label>
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
          <Divider horizontal>
            <Icon circular
              name='marker'
              color='blue'
            />
          </Divider>
          <Segment color='blue'>
            <Label attached='top'>
              {this.props.listing.street}
            </Label>
            {map}
          </Segment>
          <Divider horizontal>
            <Icon circular
              name='conversation'
              color='blue'
            />
          </Divider>
          <Segment>
            <Grid stackable>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Button fluid secondary
                    content={this.state.phone || 'Call Phone Number'}
                    icon='phone'
                    labelPosition='left'
                    onClick={this.handleCallPhoneNumber}
                  />
                </Grid.Column>
                <Grid.Column width={8}>
                  <Button fluid primary
                    content={this.state.email || 'Write An Email'}
                    icon='mail'
                    labelPosition='left'
                    onClick={this.WriteAnEmail}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Divider horizontal>
            <Icon circular
              name='list'
              color='blue'
            />
          </Divider>
          <Segment>
            <Table columns={2} className='center aligned' size='small' striped celled unstackable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan={2}>
                    Amenities & Services
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {amenityRows}
              </Table.Body>
            </Table>
            <Button fluid
              content={(this.state.showAmenities) ? 'Show Less' : 'Show All'}
              onClick={this.handleShowAmenities}
            />
          </Segment>
          <Divider horizontal>
            <Icon circular
              name='camera'
              color='blue'
            />
          </Divider>
          <Segment color='yellow'>
            <Label attached='top'>
              Photo {this.state.photoSlideIndex} of {this.props.listing.uploads.length}
            </Label>
            <Slider {...sliderOptions}>
              {this.props.listing.uploads && this.props.listing.uploads.map((upload) => {

                const imageWideUrl = `${upload.url}?width=700&height=350`;
                return <Image fluid src={imageWideUrl} />;
              })}
            </Slider>
          </Segment>
        </Segment>
        <Segment>
          <Button onClick={browserHistory.goBack} content='Back' icon='left arrow' labelPosition='left' fluid />
        </Segment>
      </div>;
  }
}
