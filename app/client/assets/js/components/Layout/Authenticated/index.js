import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import { Grid } from 'semantic-ui-react';
import styles from './styles.less';
import Menu from './Menu';

const mapStateToProps = (state) => ({
  auth: state.auth
});
const mapDispatchToProps = (dispatch) => ({});

@connect(mapStateToProps, mapDispatchToProps)
@CSSModules(styles)
export default class LayoutAuthenticated extends React.Component {
  static propTypes = {
    auth: React.PropTypes.object.isRequired,
    children: React.PropTypes.object.isRequired,
    location: React.PropTypes.object.isRequired
  };
  render() {

    return (
      <div>
        <Menu />
          <Grid centered verticalAlign='middle' className='page'>
            <Grid.Row styleName='row'>
              <Grid.Column width={16} className='content' styleName='content'>
                {this.props.children}
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </div>
    );
  }
}
