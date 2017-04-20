module.exports = {
  path: 'logout',
  getComponent(location, cb) {

    require.ensure([], () => {

      const Logout = require('./index').default;
      cb(null, Logout);
    });
  }
};
