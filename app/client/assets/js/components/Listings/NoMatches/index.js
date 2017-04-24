import React from 'react';
import { Message } from 'semantic-ui-react';

export default class NoMatches extends React.Component {
  render() {

    return (
      <Message>
        <Message.Content>
          <em>No matches.</em>
        </Message.Content>
      </Message>
    );
  }
}
