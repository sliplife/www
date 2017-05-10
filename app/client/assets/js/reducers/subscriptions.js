import { handleActions } from 'redux-actions';

const initialState = {
  subscription: {},
  subscriptions: [],
  pagination: {
    currentPage: 1,
    itemsPerPage: 25,
    nextPage: null,
    previousPage: null,
    totalItems: 0,
    totalPages: 0
  }
};

export default handleActions({
  SUBSCRIPTIONS_RESET: (state, action) => ({
    ...initialState
  }),
  SUBSCRIPTIONS_REQUEST: (state, action) => ({
    ...state,
    error: false
  }),
  SUBSCRIPTIONS_ERROR: (state, action) => ({
    ...state,
    error: action.payload
  }),
  SUBSCRIPTIONS_CREATE: (state, action) => ({
    ...state,
    subscription: action.payload.subscription
  })
}, initialState);
