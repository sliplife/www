module.exports = {
  path: '/',
  getComponent(location, cb) {

    require.ensure([], () => {

      const Home = require('./index').default;
      cb(null, Home);
    });
  }
};
