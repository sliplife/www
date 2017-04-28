const Config = require('config');
const Path = require('path');
const Webpack = require('webpack');

module.exports = {
  devtool: (process.env.NODE_ENV !== 'production') ? 'cheap-module-eval-source-map' : 'hidden-source-map',
  stats: {
    warnings: false
  },
  context: process.cwd(),
  entry: (process.env.NODE_ENV === 'production') ? ['./app/client/assets/js/index.js'] : ['webpack-hot-middleware/client', './app/client/assets/js/index.js'],
  output: {
    path: Path.join(process.cwd(), 'app', 'client', 'public', 'js'),
    publicPath: Path.join('/', 'assets', 'js', '/'),
    filename: '[name].js',
    chunkFilename: '[hash]/[id].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                require.resolve('babel-plugin-transform-decorators-legacy')
              ],
              presets: [
                require.resolve('babel-preset-react'),
                [require.resolve('babel-preset-es2015'), {
                  modules: false,
                  loose: true
                }],
                require.resolve('babel-preset-stage-0')
              ]
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'less-loader'
        ]
      }
    ]
  },
  resolveLoader: {
    modules: [
      Path.join(process.cwd(), 'node_modules')
    ]
  },
  resolve: {
    modules: [
      Path.join(process.cwd(), 'node_modules'),
      Path.join(process.cwd(), 'app', 'client', 'assets', 'js')
    ]
  },
  plugins: [
    new Webpack.HotModuleReplacementPlugin(),
    new Webpack.NoEmitOnErrorsPlugin(),
    new Webpack.optimize.UglifyJsPlugin({
      test: /\.js$/,
      include: /assets\/js/,
      exclude: /node_modules/,
      compress: { warnings: false },
      beautify: false,
      sourceMap: true,
      mangle: true,
      output: { comments: false }
    }),
    new Webpack.DefinePlugin({
      '__STRIPE_PUBLISHABLE_KEY__': JSON.stringify(Config.stripe.publishableKey),
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    })
  ]
};
