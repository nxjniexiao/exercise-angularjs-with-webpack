const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
// A webpack plugin to remove your build folder(s) before building
const CleanWebpackPlugin = require('clean-webpack-plugin');
// This plugin extracts CSS into separate files.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prodWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: 'eval',
  output: {
    filename: 'static/js/[name].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'static/css/[name].css',
      chunkFilename: 'static/css/[id].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              // publicPath: '/',
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader'
        ]
      }
    ]
  }
});

module.exports = prodWebpackConfig;
