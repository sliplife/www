import { handleActions } from 'redux-actions';

const initialState = {
  description: '',
  domain: document.location.hostname,
  host: '',
  title: '',
  version: ''
};

export default handleActions({
  API_CONNECT: (state, action) => ({
    ...state,
    ...action.payload
  }),
  API_SWITCH_CONTEXT: (state, action) => ({
    ...state,
    ...action.payload
  })
}, initialState);
