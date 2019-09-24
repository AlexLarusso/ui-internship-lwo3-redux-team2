
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['./src/app/index.js'],
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new CopyPlugin([
      { from: './src/app/index.html', to: '', toType: "dir" }
    ]),
  ],
  
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader' }
    ]
  },
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
    contentBase: './src/app/',
    host: 'localhost',
    port: '3000',
    open: true,
    liveReload: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
