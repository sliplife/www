import { handleActions } from 'redux-actions';
import jwtDecode from 'jwt-decode';

const initialState = (!localStorage.getItem('token')) ? {} : { user: jwtDecode(localStorage.getItem('token')) };

export default handleActions({
  AUTH_REQUEST: (state, action) => ({
    ...state,
    error: false
  }),
  AUTH_SIGNUP: (state, action) => ({
    ...state
  }),
  AUTH_LOGIN: (state, action) => ({
    ...state,
    ...action.payload
  }),
  AUTH_ERROR: (state, action) => ({
    ...state,
    ...action.payload
  }),
  AUTH_LOGOUT: (state, action) => ({}),
  AUTH_SEND_RECOVERY: (state, action) => ({
    ...state
  }),
  AUTH_UPDATE_PASSWORD: (state, action) => ({
    ...state
  })
}, initialState);
