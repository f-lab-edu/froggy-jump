const path = require('path')
const commonConfig = require('./webpack.common')
const { merge } = require('webpack-merge')

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
})
