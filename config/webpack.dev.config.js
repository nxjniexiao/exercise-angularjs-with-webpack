const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    /**
     * `devServer.publicPath`
     * The bundled files will be available in the browser under this path.
     * By default the devServer.publicPath is '/',
     * so your bundle is available as http://localhost:8080/bundle.js.
     * It is recommended that `devServer.publicPath` is the same as `output.publicPath`.
     */
    publicPath: '/',
    port: 8100
  }
});

module.exports = devWebpackConfig;
