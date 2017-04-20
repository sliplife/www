module.exports = {
  path: 'signup',
  getComponent(location, cb) {

    require.ensure([], () => {

      const Signup = require('./index').default;
      cb(null, Signup);
    });
  }
};
