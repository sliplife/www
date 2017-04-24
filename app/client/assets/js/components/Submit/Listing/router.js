module.exports = {
  path: 'listing',
  getComponent(location, cb) {

    require.ensure([], () => {

      const Listing = require('./index').default;
      cb(null, Listing);
    });
  }
};
