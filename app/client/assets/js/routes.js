import Layout from 'components/Layout';
import listingsRouter from 'components/Listings/router';
import loginRouter from 'components/Login/router';
import logoutRouter from 'components/Logout/router';
import recoveryRouter from 'components/Recovery/router';
import signupRouter from 'components/Signup/router';
import submitRouter from 'components/Submit/router';

// Initialize routing.
const routes = {
  // Root-level component.
  component: Layout,
  // Routes.
  childRoutes: [
    listingsRouter,
    loginRouter,
    logoutRouter,
    recoveryRouter,
    signupRouter,
    submitRouter
  ]
};

export default routes;
