import { handleActions } from 'redux-actions';

const initialState = {
  listing: {},
  listings: [],
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
  LISTINGS_RESET: (state, action) => ({
    ...initialState
  }),
  LISTINGS_REQUEST: (state, action) => ({
    ...state,
    error: false
  }),
  LISTINGS_ERROR: (state, action) => ({
    ...state,
    error: action.payload
  }),
  LISTINGS_CREATE: (state, action) => ({
    ...state,
    listing: action.payload.listing
  }),
  LISTINGS_BROWSE: (state, action) => ({
    ...state,
    listings: state.listings.concat(action.payload.listings),
    pagination: action.payload.pagination
  }),
  LISTINGS_SEARCH: (state, action) => ({
    ...state,
    listings: action.payload.listings,
    pagination: action.payload.pagination
  }),
  LISTINGS_READ: (state, action) => ({
    ...state,
    listing: action.payload.listing
  }),
  LISTINGS_UPDATE: (state, action) => ({
    ...state,
    listing: action.payload.listing,
    listings: state.listings.map((listing) => {

      return (listing.id === action.payload.listing.id) ? { ...listing, ...action.payload.listing } : listing;
    })
  }),
  LISTINGS_DELETE: (state, action) => ({
    ...state,
    listings: state.listings.filter((listing) => listing.id !== action.payload.listing.id)
  })
}, initialState);
