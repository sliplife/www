module.exports = {
  path: 'recovery(/:token)',
  getComponent(location, cb) {

    require.ensure([], () => {

      const Recovery = require('./index').default;
      cb(null, Recovery);
    });
  }
};
