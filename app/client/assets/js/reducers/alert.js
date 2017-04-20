import { handleActions } from 'redux-actions';

const initialState = {};

export default handleActions({
  ALERT: (state, action) => ({
    ...action.payload
  })
}, initialState);
