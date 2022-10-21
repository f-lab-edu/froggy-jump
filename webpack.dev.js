const path = require('path');

const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'eval',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 9000,
    hot: true,
  },
});
