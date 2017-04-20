import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import { Menu, Image } from 'semantic-ui-react';
import styles from './styles.less';

const mapStateToProps = (state) => ({
  auth: state.auth
});
const mapDispatchToProps = (dispatch) => ({});

@connect(mapStateToProps, mapDispatchToProps)
@CSSModules(styles)
export default class LayoutDefault extends React.Component {
  static propTypes = {
    auth: React.PropTypes.object.isRequired
  };

  render() {

    return (
      <Menu styleName='menu'>
        <Menu.Item header>
          <Image src='/assets/images/pirate.svg' styleName='logo' />
        </Menu.Item>
        <Menu.Item as={Link} to='/' activeClassName='active' styleName='item'>
          Browse
        </Menu.Item>
        <Menu.Item as={Link} to='/submit' activeClassName='active' styleName='item'>
          Submit
        </Menu.Item>
       <Menu.Menu position='right'>
         <Menu.Item as={Link} to='/signup' activeClassName='active' styleName='item'>
           Sign Up
         </Menu.Item>
       </Menu.Menu>
      </Menu>
    );
  }
}
