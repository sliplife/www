module.exports = {
  path: '/submit',
  getComponent(location, cb) {

    require.ensure([], () => {

      const Submit = require('./index').default;
      cb(null, Submit);
    });
  }
};
