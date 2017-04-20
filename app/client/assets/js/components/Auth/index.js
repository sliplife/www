import { UserAuthWrapper as userAuthWrapper } from 'redux-auth-wrapper';

const getUserInstance = (state) => {

  return (state.auth.user) ? state.auth.user : {};
};

// Redirects to /login by default
export const AuthWrapper = userAuthWrapper({
  authSelector: (state) => getUserInstance(state),
  wrapperDisplayName: 'Authenticated' // a nice name for this auth check
});
