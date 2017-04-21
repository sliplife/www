module.exports = {
  path: 'listings/:id',
  getComponent(location, cb) {

    require.ensure([], () => {

      const Detail = require('./index').default;
      cb(null, Detail);
    });
  }
};
