if (module.hot) {
  module.hot.accept();
}

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Root } from 'containers';
import { auth } from 'actions';
import { NProgress } from 'components';
import configureStore from 'store/configureStore';

const reduxStore = configureStore();
const history = syncHistoryWithStore(browserHistory, reduxStore);
history.listen((location, action) => {

  if (['POP', 'PUSH'].includes(location.action)) {
    NProgress.start();
  }
  window.scrollTo(0, 0);
});

// Initialize user authentication.
if (auth.isAuthenticated()) {
  reduxStore.dispatch(auth.login());
}

// Initial render.
const initialize = () => {

  ReactDOM.render(
    <Root store={reduxStore} history={history} />,
    document.getElementById('app')
  );
};

// Polyfills, only loaded if required.
if (!global.Intl) {
  require.ensure([
    // Internationalization.
    'intl', 'intl/locale-data/jsonp/en.js'
  ], (require) => {

    require('intl');
    require('intl/locale-data/jsonp/en.js');
    initialize();
  });
}
else {
  initialize();
}
