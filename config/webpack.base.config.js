const path = require('path');

var DEV_SERVER = process.argv[1].indexOf('webpack-dev-server') !== -1;
var DEV = DEV_SERVER || process.env.DEV;
var HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
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
    publicPath: '/'
  },
  // These options change how modules are resolved. 
  resolve: {
    // enables users to leave off the extension when importing:
    extensions: ['.js'],
    // Create aliases to import or require certain modules more easily.
    alias: {
      '@': resolve('src')
    }
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
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: { loader: 'babel-loader' }
      },
      // A loader for webpack that lets you import files as a string.
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          // name: 'static/img/[name].[hash:7].[ext]'
          name: path.posix.join('static', 'img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:7].[ext]'
        }
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
