module.exports = {
  path: 'confirmation',
  getComponent(location, cb) {

    require.ensure([], () => {

      const Confirmation = require('./index').default;
      cb(null, Confirmation);
    });
  }
};
