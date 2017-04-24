import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { Button, Item, Label, Segment } from 'semantic-ui-react';
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

    this.props.actions.listings.read(this.props.routeParams.id)
      .then(() => this.setState({ isLoading: false }, NProgress.done));
  }
  componentWillUnmount() {

    this.setState({ isLoading: true });
  }
  componentWillReceiveProps(nextProps) {

    if (nextProps.routeParams.id !== this.props.routeParams.id) {
      this.setState({ isLoading: true }, () => {

        this.props.actions.listings.read(nextProps.routeParams.id)
          .then(() => this.setState({ isLoading: false }, NProgress.done));
      });
    }
  }
  render() {

    return (this.state.isLoading === true) ? <Segment attached='bottom'><Loading /></Segment> :
      <div>
        <Segment attached='bottom'>
          <Item.Group>
            <Item>
              <Item.Image as={Link} to={`/listings/${this.props.listing.id}`} src='/assets/images/image.png' label={{ color: 'red', corner: 'right', icon: 'anchor' }} />
              <Item.Content>
                <Item.Header as={Link} to={`/listings/${this.props.listing.id}`}>{this.props.listing.city}</Item.Header>
                <Item.Meta>
                  <span className='cinema'>{this.props.listing.state}</span>
                </Item.Meta>
                <Item.Description>{this.props.listing.description}</Item.Description>
                <Item.Extra>
                  <Label color='orange'>New</Label>
                  <Label>Rack</Label>
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <Button onClick={browserHistory.goBack} content='Back' icon='left arrow' labelPosition='left' secondary fluid />
        </Segment>
      </div>;
  }
}
