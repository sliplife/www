import React from 'react';
import { Message } from 'semantic-ui-react';

export default class Empty extends React.Component {
  render() {

    return (
      <Message>
        <Message.Content>
          <em>No listings match!</em>
        </Message.Content>
      </Message>
    );
  }
}
