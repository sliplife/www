import debounce from 'lodash/debounce';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from 'actions';
import { Button, Form, Icon, Input, Item, Label, Segment } from 'semantic-ui-react';
import { NProgress } from 'components';

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
  render() {

    const paragraph = <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet purus eget est ultrices gravida.
      Sed ac quam cursus lacus tincidunt semper. Nam id velit ex. Aliquam in velit sit amet ipsum vestibulum elementum.
      Nulla aliquam congue nisi, a maximus eros aliquam non.
      Praesent ultrices cursus nisl quis venenatis. Curabitur ut scelerisque nulla, a sagittis sem.
      Nunc tempus vitae ante id efficitur.</p>;

    return (
      <div>
        <Segment as={Form} attached='bottom'>
          <Form.Field>
            <Input
              action={{ secondary: true, content: 'Cast' }}
              icon='search'
              iconPosition='left'
              name="query"
              placeholder='Search'
              type="text"
            />
          </Form.Field>
        </Segment>
        <Segment>
          <Item.Group divided>
            <Item>
              <Item.Image src='/assets/images/image.png' label={{ as: 'a', color: 'red', corner: 'right', icon: 'anchor' }} />
              <Item.Content>
                <Item.Header as='a'>Palm Bay</Item.Header>
                <Item.Meta>
                  <span className='cinema'>Florida</span>
                </Item.Meta>
                <Item.Description>{paragraph}</Item.Description>
                <Item.Extra>
                  <Label color='orange'>New</Label>
                  <Label>Rack</Label>
                  <Button primary floated='right'>
                    View Listing
                    <Icon name='right chevron' />
                  </Button>
                </Item.Extra>
              </Item.Content>
            </Item>
            <Item>
              <Item.Image src='/assets/images/image.png' />
              <Item.Content>
                <Item.Header as='a'>Santa Cruz</Item.Header>
                <Item.Meta>
                  <span className='cinema'>California</span>
                </Item.Meta>
                <Item.Description>{paragraph}</Item.Description>
                <Item.Extra>
                  <Button primary floated='right'>
                    View Listing
                    <Icon name='right chevron' />
                  </Button>
                  <Label>Marina</Label>
                </Item.Extra>
              </Item.Content>
            </Item>
            <Item>
              <Item.Image src='/assets/images/image.png' />
              <Item.Content>
                <Item.Header as='a'>San Antonio</Item.Header>
                <Item.Meta>
                  <span className='cinema'>Texas</span>
                </Item.Meta>
                <Item.Description>{paragraph}</Item.Description>
                <Item.Extra>
                  <Label>Trailer</Label>
                  <Button primary floated='right'>
                    View Listing
                    <Icon name='right chevron' />
                  </Button>
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </div>
    );
  }

}
