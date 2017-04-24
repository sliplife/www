import { handleActions } from 'redux-actions';

const initialState = {
  upload: {},
  uploads: [],
  pagination: {}
};

export default handleActions({
  UPLOADS_RESET: (state, action) => ({
    ...initialState
  }),
  UPLOADS_REQUEST: (state, action) => ({
    ...state,
    error: false
  }),
  UPLOADS_ERROR: (state, action) => ({
    ...state,
    error: action.payload
  }),
  UPLOADS_CREATE: (state, action) => ({
    ...state,
    upload: action.payload.upload
  }),
  UPLOADS_BROWSE: (state, action) => ({
    ...state,
    uploads: state.uploads.concat(action.payload.uploads),
    pagination: action.payload.pagination
  }),
  UPLOADS_SEARCH: (state, action) => ({
    ...state,
    uploads: action.payload.uploads,
    pagination: action.payload.pagination
  }),
  UPLOADS_READ: (state, action) => ({
    ...state,
    upload: action.payload.upload
  }),
  UPLOADS_UPDATE: (state, action) => ({
    ...state,
    upload: action.payload.upload,
    uploads: state.uploads.map((upload) => {

      return (upload.id === action.payload.upload.id) ? { ...upload, ...action.payload.upload } : upload;
    })
  }),
  UPLOADS_DELETE: (state, action) => ({
    ...state,
    uploads: state.uploads.filter((upload) => upload.id !== action.payload.upload.id)
  })
}, initialState);
