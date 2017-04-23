import debounce from 'lodash/debounce';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'actions';
import { Button, Form, Icon, Input, Item, Label, Segment } from 'semantic-ui-react';
import { Loading, NProgress } from 'components';
import Empty from './Empty';
import NoMatches from './NoMatches';

const mapStateToProps = (state) => ({
  ...state.auth,
  listings: state.listings
});
const mapDispatchToProps = (dispatch) => ({
  dispatch,
  actions: {
    alert: bindActionCreators(actionCreators.alert, dispatch),
    auth: bindActionCreators(actionCreators.auth, dispatch),
    listings: bindActionCreators(actionCreators.listings, dispatch)
  }
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    listings: PropTypes.object.isRequired
  };
  constructor(props) {

    super(props);
    this.search = debounce(this.search, 500);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.bindWindowScroll = this.bindWindowScroll.bind(this);
    this.unbindWindowScroll = this.unbindWindowScroll.bind(this);
    this.handleWindowScroll = debounce(this.handleWindowScroll.bind(this), 250);
    this.state = {
      isLoading: true,
      isPaging: false,
      isSearching: false,
      query: '',
      limit: 25,
      page: 1
    };
  }
  componentDidMount() {

    NProgress.done();
    const { limit, page } = this.state;
    this.scroller = window.document;
    this.props.actions.listings.browse({ limit, page })
      .then(() => this.setState({ isLoading: false }, this.bindWindowScroll));
  }
  componentDidUpdate() {

    NProgress.done();
    this.bindWindowScroll();
  }
  componentWillUnmount() {

    this.unbindWindowScroll();
    this.props.actions.listings.reset();
  }
  bindWindowScroll() {

    if (this.scroller) {
      this.scroller.addEventListener('scroll', this.handleWindowScroll, false);
      this.scroller.addEventListener('wheel', this.handleWindowScroll, false);
      this.scroller.addEventListener('touchstart', this.handleWindowScroll, false);
    }
  }
  unbindWindowScroll() {

    if (this.scroller) {
      this.scroller.removeEventListener('scroll', this.handleWindowScroll, false);
      this.scroller.removeEventListener('wheel', this.handleWindowScroll, false);
      this.scroller.removeEventListener('touchstart', this.handleWindowScroll, false);
    }
  }
  handleWindowScroll() {

    const { currentPage, nextPage } = this.props.listings;
    if (this.nearBottom() && currentPage < nextPage) {
      NProgress.start();
      this.setState({ isPaging: true }, () => {

        this.props.actions.listings.browse({ limit: this.state.limit, page: nextPage })
          .then(() => this.setState({ isPaging: false }, NProgress.done()));
      });
    }
  }
  nearBottom() {

    return this.scroller.scrollTop + this.scroller.clientHeight >= this.scroller.scrollHeight - 450;
  }
  search(query) {

    const { limit, page } = this.state;
    this.props.actions.listings.search({ query, limit, page })
      .then(() => this.setState({ isSearching: false }, this.scrollBind));
  }
  handleSearch(event) {

    const query = event.target.value;
    this.setState({ query, isSearching: true }, () => this.search(query));
  }
  handleSubmit(event) {

    event.preventDefault();
  }
  renderSearchInput() {

    return (
      <Segment as={Form} onSubmit={this.handleSubmit} attached='bottom'>
        <Form.Field>
          <Input
            icon='search'
            iconPosition='left'
            name="query"
            placeholder='Search'
            type="text"
            value={this.state.query}
            loading={this.state.isSearching}
            onChange={this.handleSearch}
          />
        </Form.Field>
      </Segment>
    );
  }
  render() {

    const totalLoaded = this.props.listings.listings.length;
    if (this.state.query && totalLoaded === 0) {
      return (
        <div>
          {this.renderSearchInput()}
          <Segment>
            <NoMatches />
          </Segment>
        </div>
      );
    }
    if (totalLoaded === 0 && !this.state.isLoading && this.state.query !== '') {
      return (
        <div>
          {this.renderSearchInput()}
          <Segment>
            <Empty />
          </Segment>
        </div>
      );
    }
    if (totalLoaded === 0) {
      return (
        <div>
          {this.renderSearchInput()}
          <Segment>
            <Loading />
          </Segment>
        </div>
      );
    }

    return (
      <div>
        {this.renderSearchInput()}
        <Segment>
          <Item.Group divided>
            {this.state.isLoading ? <Loading /> : this.props.listings.listings.map((listing) => {

              return (
                <Item key={listing.id}>

                  <Item.Image as={Link} to={`/listings/${listing.id}`} src='/assets/images/image.png' label={{ color: 'red', corner: 'right', icon: 'anchor' }} />
                  <Item.Content>
                    <Item.Header as={Link} to={`/listings/${listing.id}`}>Palm Bay</Item.Header>
                    <Item.Meta>
                      <span className='cinema'>Florida</span>
                    </Item.Meta>
                    <Item.Description><p>{listing.description}</p></Item.Description>
                    <Item.Extra>
                      <Label color='orange'>New</Label>
                      <Label>Rack</Label>
                      <Button primary floated='right' as={Link} to={`/listings/${listing.id}`}>
                        View Listing
                        <Icon name='right chevron' />
                      </Button>
                    </Item.Extra>
                  </Item.Content>
                </Item>
              );
            })}
          </Item.Group>
        </Segment>
      </div>
    );
  }

}
