module.exports = {
  path: 'login',
  getComponent(location, cb) {

    require.ensure([], () => {

      const Login = require('./index').default;
      cb(null, Login);
    });
  }
};
