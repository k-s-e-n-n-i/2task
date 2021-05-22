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



