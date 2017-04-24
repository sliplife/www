import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import * as alert from './alert';
import * as api from './api';
import * as auth from './auth';
import * as listings from './listings';
import * as tokens from './tokens';
import * as uploads from './uploads';

export default combineReducers({
  alert: alert.default,
  api: api.default,
  auth: auth.default,
  listings: listings.default,
  routing,
  tokens: tokens.default,
  uploads: uploads.default
});
