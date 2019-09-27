const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  optimization: {
    usedExports: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
    contentBase: './dist',
    host: 'localhost',
    port: '3000',
    open: true,
    liveReload: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000,
    },
  },
});
