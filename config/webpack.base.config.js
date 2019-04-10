const path = require('path');

var DEV_SERVER = process.argv[1].indexOf('webpack-dev-server') !== -1;
var DEV = DEV_SERVER || process.env.DEV;
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: DEV ? 'development' : 'production',
  devtool: DEV ? 'source-map' : 'eval',
  entry: {
    app: './src/index.js'
  },
  output: {
    /**
     * `output.path`
     * The output directory as an absolute path.
     */
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    /**
     * `output.publicPath`
     * This is an important option when using on-demand-loading(按需加载) or
     * loading external resources(加载外部资源) like images, files, etc.
     */
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js']
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all'
    }
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html'
    })
  ]
};
