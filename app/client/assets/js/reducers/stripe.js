import { handleActions } from 'redux-actions';

const initialState = {
  charge: {},
  token: {}
};

export default handleActions({
  STRIPE_RESET: (state, action) => ({
    ...initialState
  }),
  STRIPE_REQUEST: (state, action) => ({
    ...state,
    error: false
  }),
  STRIPE_ERROR: (state, action) => ({
    ...state,
    error: action.payload
  }),
  STRIPE_CREATE_CHARGE: (state, action) => ({
    ...state,
    charge: action.payload.charge
  }),
  STRIPE_CREATE_TOKEN: (state, action) => ({
    ...state,
    token: action.payload
  })
}, initialState);
