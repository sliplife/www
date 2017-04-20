import React, { PropTypes } from 'react';
import Large from './large';
import Small from './small';

export default class Loading extends React.Component {
  static propTypes = {
    size: PropTypes.string
  };
  render() {

    return (this.props.size === 'small') ? <Small /> : <Large />;
  }
}
