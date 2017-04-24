module.exports = {
  path: '/',
  getComponent(location, cb) {

    require.ensure([], () => {

      const Listings = require('./index').default;
      cb(null, Listings);
    });
  },
  getChildRoutes(location, cb) {

    require.ensure([], () => {

      const detailsRouter = require('./Detail/router');
      cb(null, [
        detailsRouter
      ]);
    });
  }
};
