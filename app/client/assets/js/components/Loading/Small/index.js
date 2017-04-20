import React from 'react';
import CSSModules from 'react-css-modules';
import { Icon, Message } from 'semantic-ui-react';
import styles from './styles.less';

@CSSModules(styles)
export default class Loading extends React.Component {
  render() {

    return (
      <Message size='tiny' icon>
        <Icon name='circle notched' size='tiny' styleName='icon' loading/>
        <Message.Content>
          Loading.
        </Message.Content>
      </Message>
    );
  }
}
