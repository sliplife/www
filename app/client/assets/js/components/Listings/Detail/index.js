import capitalize from 'lodash/capitalize';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { Button, Divider, Icon, Item, Label, Segment } from 'semantic-ui-react';
import { CircleMarker, Map, Popup, TileLayer } from 'react-leaflet';
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
    isLoading: true
  };
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
  render() {

    const imageUrl = (this.state.isLoading === true || !this.props.listing.uploads[0]) ? '/assets/images/image.png' : `${this.props.listing.uploads[0].url}?width=480&height=398`;
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

    return (this.state.isLoading === true) ? <Segment attached='bottom'><Loading /></Segment> :
      <div>
        <Segment attached='bottom'>
          <Item.Group>
            <Item>
              <Item.Image as={Link} to={`/listings/${this.props.listing.id}`} src={imageUrl} label={{ content: <Label attached='top'>For {capitalize(this.props.listing.terms)} {this.props.listing.price}</Label> }} />
              <Item.Content>
                <Item.Header as={Link} to={`/listings/${this.props.listing.id}`}>{this.props.listing.city}</Item.Header>
                <Item.Meta>
                  <span className='cinema'>{this.props.listing.state}, {this.props.listing.zip}</span>
                </Item.Meta>
                <Item.Description>{this.props.listing.description}</Item.Description>
                <Item.Extra>
                  {this.props.listing.isNew  ? <Label color='orange' size='mini'>New</Label> : null }
                  <Label size='mini'>{this.props.listing.typeName}</Label>
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
          <Segment>
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

          </Segment>
          <Divider horizontal>
            <Icon circular
              name='list'
              color='blue'
            />
          </Divider>
          <Segment>

          </Segment>
          <Divider horizontal>
            <Icon circular
              name='camera'
              color='blue'
            />
          </Divider>
          <Segment>

          </Segment>
        </Segment>
        <Segment>
          <Button onClick={browserHistory.goBack} content='Back' icon='left arrow' labelPosition='left' secondary fluid />
        </Segment>
      </div>;
  }
}
