const path = require('path');

var DEV_SERVER = process.argv[1].indexOf('webpack-dev-server') !== -1;
var DEV = DEV_SERVER || process.env.DEV;

module.exports = {
  mode: DEV ? 'development' : 'production',
  devtool: DEV ? 'source-map' : 'eval',
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].js',
    publicPath: '/dist/', // The bundled files will be available in the browser under this path.
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    publicPath: '/dist/',
    port: 8100
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: { loader: 'babel-loader' }
      },
      // A loader for webpack that lets you import files as a string.
      {
        test: /\.html$/,
        use: 'raw-loader'
      }
    ]
  }
};
