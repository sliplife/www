module.exports = {
  path: 'billing',
  getComponent(location, cb) {

    require.ensure([], () => {

      const Billing = require('./index').default;
      cb(null, Billing);
    });
  }
};
