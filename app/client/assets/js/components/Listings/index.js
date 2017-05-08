import debounce from 'lodash/debounce';
import capitalize from 'lodash/capitalize';
import React, { PropTypes } from 'react';
import { FormattedNumber } from 'react-intl';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'actions';
import { Button, Form, Grid, Icon, Input, Item, Label, Segment } from 'semantic-ui-react';
import { Loading, NProgress } from 'components';
import Empty from './Empty';
import NoMatches from './NoMatches';
import ListingsFilter from './Filter';

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
    children: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    listings: PropTypes.object.isRequired
  };
  constructor(props) {

    super(props);
    this.search = debounce(this.search, 500);
    this.handleSearchFilter = this.handleSearchFilter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.bindWindowScroll = this.bindWindowScroll.bind(this);
    this.unbindWindowScroll = this.unbindWindowScroll.bind(this);
    this.handleWindowScroll = debounce(this.handleWindowScroll.bind(this), 250);
    this.state = {
      isLoading: true,
      isPaging: false,
      isSearching: false,
      filter: {
        query: '',
        terms: '',
        location: '',
        limit: 5,
        page: 1
      }
    };
  }
  componentDidMount() {

    NProgress.done();
    const { limit, page } = this.state;
    this.scroller = document.body;
    this.props.actions.listings.browse({ limit, page, with: 'uploads' })
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

    const { currentPage, nextPage } = this.props.listings.pagination;
    if (this.nearBottom() && currentPage < nextPage) {
      NProgress.start();
      this.setState({ isPaging: true }, () => {

        this.props.actions.listings.browse({ ...this.state.filter, page: nextPage, with: 'uploads' })
          .then(() => this.setState({ isPaging: false }, NProgress.done()));
      });
    }
  }
  nearBottom() {

    return (window.innerHeight + this.scroller.scrollTop + 250) >= this.scroller.offsetHeight;
  }
  search(filter) {

    this.props.actions.listings.search({ ...filter, with: 'uploads' })
      .then(() => {

        this.props.dispatch(push('/'));
        this.setState({ isSearching: false }, () => {

          this.scrollBind();
        });
      });
  }
  handleSearchFilter(params) {

    const filter = { ...this.state.filter, ...params };
    this.setState({ filter, isSearching: true }, () => this.search({ ...filter }));
  }
  handleSubmit(event) {

    event.preventDefault();
  }
  renderSearchInput() {

  //   return (
  //     <Segment as={Form} onSubmit={this.handleSubmit} attached='bottom'>
  //       <Form.Field>
  //         <Input
  //           icon='search'
  //           iconPosition='left'
  //           name="query"
  //           placeholder='Search amenities, locations, etc.'
  //           type="text"
  //           value={this.state.query}
  //           loading={this.state.isSearching}
  //           onChange={this.handleSearchFilter}
  //         />
  //       </Form.Field>
  //     </Segment>
  //   );
  }
  render() {
  //
  //   const totalLoaded = this.props.listings.listings.length;
  //   if (this.state.query && totalLoaded === 0) {
  //     return (
  //       <div>
  //         {this.renderSearchInput()}
  //         <Segment>
  //           <NoMatches />
  //         </Segment>
  //       </div>
  //     );
  //   }
  //   if (totalLoaded === 0 && !this.state.isLoading && this.state.query !== '') {
  //     return (
  //       <div>
  //         {this.renderSearchInput()}
  //         <Segment>
  //           <Empty />
  //         </Segment>
  //       </div>
  //     );
  //   }
  //   if (totalLoaded === 0) {
  //     return (
  //       <div>
  //         {this.renderSearchInput()}
  //         <Segment>
  //           <Loading />
  //         </Segment>
  //       </div>
  //     );
  //   }

    return (
      <Grid>
        <Grid.Column computer='4' only='computer' style={{ padding: '3em 0 0 2em' }}>
          <ListingsFilter handleSearchFilter={this.handleSearchFilter} filter={this.state.filter} />
        </Grid.Column>
        <Grid.Column computer='12' width='16'>
          <Grid>
            <Grid.Row>
              <Grid.Column width='16'>
                <Segment as={Form} onSubmit={this.handleSubmit} attached='bottom'>
                  <Form.Field>
                    <Input
                      icon='search'
                      iconPosition='left'
                      name="query"
                      placeholder='Search dock descriptions'
                      type="text"
                      value={this.state.filter.query}
                      loading={this.state.isSearching}
                      onChange={(event) => this.handleSearchFilter({ query: event.target.value })}
                    />
                  </Form.Field>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            {(this.state.filter.state || this.state.filter.city || this.state.filter.location || this.state.filter.type || this.state.filter.terms) ? (
              <Grid.Row>
                <Grid.Column width='16'>
                  <Segment>
                    {(!this.state.filter.state) ? '' : <Label icon='remove' content={capitalize(this.state.filter.state)} as={Link} onClick={() => this.handleSearchFilter({ state: '' })} />}
                    {(!this.state.filter.city) ? '' : <Label icon='remove' content={this.state.filter.city.split(' ').map(capitalize).join(' ')} as={Link} onClick={() => this.handleSearchFilter({ city: '' })} />}
                    {(!this.state.filter.location) ? '' : <Label icon='remove' content={this.state.filter.location.split('_').map(capitalize).join(' ')} as={Link} onClick={() => this.handleSearchFilter({ location: '' })} />}
                    {(!this.state.filter.type) ? '' : <Label icon='remove' content={this.state.filter.type.split('_').map(capitalize).join(' ')} as={Link} onClick={() => this.handleSearchFilter({ type: '' })} />}
                    {(!this.state.filter.terms) ? '' : <Label icon='remove' content={`For ${capitalize(this.state.filter.terms)}`} as={Link} onClick={() => this.handleSearchFilter({ terms: '' })} />}
                    {/*<Label content='Create Alert' color='orange' icon='announcement' as={Link} />*/}
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            ) : ''}
            <Grid.Row>
              <Grid.Column width='16'>
                {this.props.children ? React.cloneElement(this.props.children) :
                  <Segment>
                    <Item.Group divided>
                      {this.props.listings.listings.length === 0 ? ((this.state.isLoading) ? <Loading /> : <NoMatches />) : this.props.listings.listings.map((listing) => {

                        const imageUrl = (listing.uploads.length > 0) ? `${listing.uploads[0].url}?width=480&height=398` : '/assets/images/image.png';
                        const price = <FormattedNumber value={listing.price} style='currency' currency='usd' />;
                        const imageLabel = <Label attached='top'>{price} {listing.termType === 'by_foot' ? 'per foot' : ''}</Label>;
                        return (
                          <Item key={listing.id}>

                            <Item.Image as={Link} to={`/listings/${listing.id}`} src={imageUrl} label={{ content: imageLabel }} />
                            <Item.Content>
                              <Item.Header as={Link} to={`/listings/${listing.id}`}>{listing.city}</Item.Header>
                              <Item.Meta>
                                <span className='cinema'>{listing.locationName} in {listing.state}, {listing.zip}</span>
                              </Item.Meta>
                              <Item.Description><p>{listing.description}</p></Item.Description>
                              <Item.Extra>
                                {listing.isNew  ? <Label color='orange' size='mini'>New</Label> : null }
                                <Label size='mini'>{listing.typeName}</Label>
                                <Button primary floated='right' as={Link} to={`/listings/${listing.id}`}>
                                  For {capitalize(listing.terms)}
                                  <Icon name='right chevron' />
                                </Button>
                              </Item.Extra>
                            </Item.Content>
                          </Item>
                        );
                      })}
                    </Item.Group>
                  </Segment>
                }
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
      </Grid>
    );
  }

}
