module.exports = {
  path: 'submit',
  getComponent(location, cb) {

    require.ensure([], () => {

      const Submit = require('./index').default;
      cb(null, Submit);
    });
  },
  getChildRoutes(location, cb) {

    require.ensure([], () => {

      const listingRouter = require('./Listing/router');
      const billingRouter = require('./Billing/router');
      const confirmationRouter = require('./Confirmation/router');
      cb(null, [
        listingRouter,
        billingRouter,
        confirmationRouter
      ]);
    });
  }
};
