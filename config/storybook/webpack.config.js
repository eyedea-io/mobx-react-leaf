const paths = require('../paths');
const babelQuery = require('../babel.dev');

// PostCSS plugins
const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');
const postcssImport = require('postcss-import');

const modules = [
  'src',
  'node_modules'
];

module.exports = {
  resolve: {
    modulesDirectories: modules,
    modules,
    // These are the reasonable defaults supported by the Node ecosystem.
    extensions: [
      '',
      '.js',
      '.jsx',
      '.react.js'
    ]
  },
  module: {
    loaders: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'xo-loader',
        include: paths.appSrc
      },
      {
        test: /\.js$/,
        include: paths.appSrc,
        loader: 'babel',
        exclude: /node_modules/,
        query: babelQuery
      },
      {
        test: /\.css$/,
        include: paths.appSrc,
        exclude: paths.stylesSrc,
        loader: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&modules&importLoaders=1&sourceMap!postcss-loader'
      },
      {
        test: /\.css$/,
        include: paths.stylesSrc,
        loader: 'style-loader!css-loader?localIdentName=[local]__[path][name]__[hash:base64:5]&sourceMap!postcss-loader'
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.json$/,
        include: [paths.appSrc, /node_modules/],
        loader: 'json'
      },
      {
        test: /\.(jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        include: [paths.appSrc, /node_modules/],
        loader: 'file',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.(mp4|webm)(\?.*)?$/,
        include: [paths.appSrc, /node_modules/],
        loader: 'url',
        query: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  postcss: cssLoader => [
    postcssImport({
      path: [paths.stylesSrc],
      addDependencyTo: cssLoader
    }),
    postcssFocus(),
    cssnext({
      browsers: ['last 2 versions', 'IE > 10']
    })
  ]
};
