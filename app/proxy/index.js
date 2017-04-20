const H2o2 = require('h2o2');
const internals = {
  getProxyUri: (request) => {

    // return `${request.headers['x-forwarded-proto'] || request.connection.info.protocol}://${request.info.hostname}:${request.server.app.config.api.port}/${request.params.path}${request.url.search}`;
    return `https://api.sliplife.dev/${request.params.path}${request.url.search}`;
  }
};

const plugin = (sliplife, options, nextPlugin) => {

  sliplife.dependency(plugin.attributes.dependencies, (server, nextDependency) => {

    server.register([H2o2], (error) => {

      if (error) {
        throw error;
      }
      server.select('www').route([
        {
          method: '*',
          path: '/api/{path*}',
          config: {
            auth: false,
            handler: (request, reply) => {

              reply.proxy({
                uri: internals.getProxyUri(request),
                passThrough: true,
                xforward: true,
                rejectUnauthorized: false
              });
            },
            payload: {
              parse: false
            }
          }
        }
      ]);
      nextDependency();
    });
  });
  nextPlugin();
};

plugin.attributes = {
  name: 'proxy',
  dependencies: []
};

exports.register = plugin;
