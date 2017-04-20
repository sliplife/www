import { handleActions } from 'redux-actions';

const initialState = {
  token: {},
  tokens: [],
  pagination: {}
};

export default handleActions({
  TOKENS_RESET: (state, action) => ({
    ...initialState
  }),
  TOKENS_REQUEST: (state, action) => ({
    ...state,
    error: false
  }),
  TOKENS_ERROR: (state, action) => ({
    ...state,
    error: action.payload
  }),
  TOKENS_CREATE: (state, action) => ({
    ...state,
    token: action.payload.token
  }),
  TOKENS_BROWSE: (state, action) => ({
    ...state,
    tokens: state.tokens.concat(action.payload.tokens),
    pagination: action.payload.pagination
  }),
  TOKENS_SEARCH: (state, action) => ({
    ...state,
    tokens: action.payload.tokens,
    pagination: action.payload.pagination
  }),
  TOKENS_READ: (state, action) => ({
    ...state,
    token: action.payload.token
  }),
  TOKENS_UPDATE: (state, action) => ({
    ...state,
    token: action.payload.token,
    tokens: state.tokens.map((token) => {

      return (token.id === action.payload.token.id) ? { ...token, ...action.payload.token } : token;
    })
  }),
  TOKENS_DELETE: (state, action) => ({
    ...state,
    tokens: state.tokens.filter((token) => token.id !== action.payload.token.id)
  })
}, initialState);
