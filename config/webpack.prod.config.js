const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
// A webpack plugin to remove your build folder(s) before building
const CleanWebpackPlugin = require('clean-webpack-plugin');

const prodWebpackConfig = merge(baseWebpackConfig, {
  output: {
    filename: 'static/js/[name].js'
  },
  plugins: [new CleanWebpackPlugin()]
});

module.exports = prodWebpackConfig;
