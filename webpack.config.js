const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sass = require('./webpack/sass');

const webpack = require('webpack');
const { merge } = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const css = require('./webpack/css');
//const extractCSS = require('./webpack/css.extract');
//const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const font = require('./webpack/font');
const ts = require('./webpack/typescript');



const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};



const common = {
	mode: 'production',
	entry: {
    'index': PATHS.source + '/index.js',
    'landing-page': PATHS.source + '/pages/landing-page/landing-page.js',
    'registration': PATHS.source + '/pages/registration/registration.js',
    'sign-in': PATHS.source + '/pages/sign-in/sign-in.js',
    'search-room': PATHS.source + '/pages/search-room/search-room.js',
    'details-room': PATHS.source + '/pages/details-room/details-room.js',
    'ui-kit-form-elements': PATHS.source + '/pages/ui-kit-form-elements/ui-kit-form-elements.js',
    'ui-kit-cards': PATHS.source + '/pages/ui-kit-cards/ui-kit-cards.js',
    'ui-kit-header-footer': PATHS.source + '/pages/ui-kit-header-footer/ui-kit-header-footer.js',
    'ui-kit-color-type': PATHS.source + '/pages/ui-kit-color-type/ui-kit-color-type.js'
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
    	title: 'Webpack app',
      filename: 'index.html',
      chunks: ['index'],
      template: PATHS.source + '/index.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'landing-page.html',
      chunks: ['landing-page'],
      template: PATHS.source + '/pages/landing-page/landing-page.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'registration.html',
      chunks: ['registration'],
      template: PATHS.source + '/pages/registration/registration.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'sign-in.html',
      chunks: ['sign-in'],
      template: PATHS.source + '/pages/sign-in/sign-in.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'search-room.html',
      chunks: ['search-room'],
      template: PATHS.source + '/pages/search-room/search-room.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'details-room.html',
      chunks: ['details-room'],
      template: PATHS.source + '/pages/details-room/details-room.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'ui-kit-form-elements.html',
      chunks: ['ui-kit-form-elements'],
      template: PATHS.source + '/pages/ui-kit-form-elements/ui-kit-form-elements.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'ui-kit-cards.html',
      chunks: ['ui-kit-cards'],
      template: PATHS.source + '/pages/ui-kit-cards/ui-kit-cards.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'ui-kit-header-footer.html',
      chunks: ['ui-kit-header-footer'],
      template: PATHS.source + '/pages/ui-kit-header-footer/ui-kit-header-footer.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'ui-kit-color-type.html',
      chunks: ['ui-kit-color-type'],
      template: PATHS.source + '/pages/ui-kit-color-type/ui-kit-color-type.pug'
    })
  ],
  module: {
    rules: [
    {
      test: /\.pug$/,
      loader: 'pug-loader',
      options: {
        pretty: true
      }
    }
    ]
  },
}

const developmentConfig = {
	mode: 'development',
  devServer: {
    stats: 'errors-only',
    port: 9000
  }
};



module.exports = function(env) {
	console.log('env: ', env);
  if (env.conf === 'development') {
    return merge([
      common,
      developmentConfig,
      sass(),
      css(),
      font(),
      images(),
      ts()
    ])
  }
  
  if (env.conf === 'production') {
    return merge([
      common,
      sass(),
      css(),
      font(),
      images(),
      ts()
    ])
  }
};





/*module.exports = {
  mode: 'development',
  entry: {
    'index': PATHS.source + '/index1.js',
    //'landing-page': PATHS.source + '/pages/landing-page/landing-page.js'
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },

  plugins: [
    new HtmlWebpackPlugin({
    	title: 'Webpack app',
      filename: 'index.html',
      chunks: ['index'],
      template: PATHS.source + '/index.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'landing-page.html',
      chunks: ['landing-page'],
      template: PATHS.source + '/pages/landing-page/landing-page.pug'
    })
  ],

  module: {
    rules: [
    {
      test: /\.pug$/,
      loader: 'pug-loader',
      options: {
        pretty: true
      }
    }
    ]
  },
  devServer: {
    stats: 'errors-only'
  }
};*/



