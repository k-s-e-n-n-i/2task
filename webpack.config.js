const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const devserver = require('./webpack/devserver');
const pug = require('./webpack/pug');
const html = require('./webpack/html');
const sass = require('./webpack/sass');
const css = require('./webpack/css');

const images = require('./webpack/images');
const font = require('./webpack/font');
const ts = require('./webpack/typescript');


const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build')
};



const common = merge([
  {
    mode: 'production',
    entry: {
      'index.js': PATHS.source + '/index.js',
      'landing-page.js': PATHS.source + '/pages/landing-page/landing-page.js',
      'registration.js': PATHS.source + '/pages/registration/registration.js',
      'sign-in.js': PATHS.source + '/pages/sign-in/sign-in.js',
      'search-room.js': PATHS.source + '/pages/search-room/search-room.js',
      'details-room.js': PATHS.source + '/pages/details-room/details-room.js',
      'ui-kit-form-elements.js': PATHS.source + '/pages/ui-kit-form-elements/ui-kit-form-elements.js',
      'ui-kit-cards.js': PATHS.source + '/pages/ui-kit-cards/ui-kit-cards.js',
      'ui-kit-header-footer.js': PATHS.source + '/pages/ui-kit-header-footer/ui-kit-header-footer.js',
      'ui-kit-color-type.js': PATHS.source + '/pages/ui-kit-color-type/ui-kit-color-type.js',
    },
    output: {
      path: PATHS.build,
      filename: '[name]'
    },
    resolve: {
      alias: {
        '@Elements': path.resolve(__dirname, 'src/blocks/elements/'),
        '@Img': path.resolve(__dirname, 'src/img/'),
        '@Pages': path.resolve(__dirname, 'src/pages/'),
      },
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
      }),
    ],
  },
  pug(),
  html(),
  sass(),
  css(),
  font(),
  images(),
  ts()
]);

const developmentConfig = {
	mode: 'development',
  devServer: {
    stats: 'errors-only',
    port: 9000
  }
};



module.exports = function(env) {
  if (env.conf === 'development') {
    return merge([
      common,
      developmentConfig,
      
    ])
  }
  
  if (env.conf === 'production') {
    return merge([
      common,
    ])
  }
};