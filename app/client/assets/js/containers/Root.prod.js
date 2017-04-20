import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { Router } from 'react-router';
import routes from '../routes';

export default class Root extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }
  render() {

    return (
      <Provider store={this.props.store}>
        <div>
          <IntlProvider locale="en">
            <Router history={this.props.history} routes={routes} />
          </IntlProvider>
        </div>
      </Provider>
    );
  }
};
