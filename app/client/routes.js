const Path = require('path');

module.exports = [
  {
    method: '*',
    path: '/{params*}',
    config: {
      handler: function (request, reply) {

        reply.view('layouts/default');
      }
    }
  },
  {
    method: 'GET',
    path: '/assets/{params*}',
    config: {
      auth: false,
      handler: {
        directory: {
          path: Path.join(process.cwd(), 'app', 'client', 'public'),
          listing: false,
          showHidden: false,
          lookupCompressed: true,
          redirectToSlash: true,
          index: true,
          defaultExtension: 'html'
        }
      }
    }
  },
  {
    method: 'GET',
    path: '/robots.txt',
    config: {
      auth: false,
      handler: {
        file: Path.join(process.cwd(), 'app', 'client', 'public', 'robots.txt')
      }
    }
  }
];
