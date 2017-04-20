const Webpack = require('webpack');
const WebpackConfig = require('../client/webpack.config');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');

const plugin = (sliplife, options, nextPlugin) => {

  if (process.env.NODE_ENV === 'production') {
    return nextPlugin();
  }
  const compiler = Webpack(WebpackConfig);
  const devMiddleware = WebpackDevMiddleware(compiler, {
    quiet: false,
    noInfo: false,
    publicPath: WebpackConfig.output.publicPath
  });
  sliplife.ext('onRequest', (request, reply) => {

    const raw = request.raw;
    devMiddleware(raw.req, raw.res, (devMiddlewareError) => {

      if (devMiddlewareError) {
        return reply(devMiddlewareError);
      }
      reply.continue();
    });
  });
  const hotMiddleware = WebpackHotMiddleware(compiler, {});
  sliplife.ext('onRequest', (request, reply) => {

    const raw = request.raw;
    hotMiddleware(raw.req, raw.res, (hotMiddlewareError) => {

      if (hotMiddlewareError) {
        return reply(hotMiddlewareError);
      }
      reply.continue();
    });
  });
  nextPlugin();
};

plugin.attributes = {
  name: 'webpack',
  dependencies: []
};

exports.register = plugin;
