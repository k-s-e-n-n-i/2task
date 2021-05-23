const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devserver = require('./webpack/devserver');
const pug = require('./webpack/pug');
const html = require('./webpack/html');
const sass = require('./webpack/sass');
const css = require('./webpack/css');

const images = require('./webpack/images');
const font = require('./webpack/font');
const ts = require('./webpack/typescript');
const extractCSS = require('./webpack/css.extract');
//const uglifyJS = require('./webpack/js.uglify');


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
      
      /*'js/index.js': PATHS.source + '/index.js',
      'js/landing-page.js': PATHS.source + '/pages/landing-page/landing-page.js',
      'js/registration.js': PATHS.source + '/pages/registration/registration.js',
      'js/sign-in.js': PATHS.source + '/pages/sign-in/sign-in.js',
      'js/search-room.js': PATHS.source + '/pages/search-room/search-room.js',
      'js/details-room.js': PATHS.source + '/pages/details-room/details-room.js',
      'js/ui-kit-form-elements.js': PATHS.source + '/pages/ui-kit-form-elements/ui-kit-form-elements.js',
      'js/ui-kit-cards.js': PATHS.source + '/pages/ui-kit-cards/ui-kit-cards.js',
      'js/ui-kit-header-footer.js': PATHS.source + '/pages/ui-kit-header-footer/ui-kit-header-footer.js',
      'js/ui-kit-color-type.js': PATHS.source + '/pages/ui-kit-color-type/ui-kit-color-type.js',
      'css/index.css': PATHS.source + '/index.scss',
      'css/font/fonts.css' : PATHS.source + '/font/fonts.css',
      'css/blocks/btn.css' : PATHS.source + '/blocks/elements/btn/btn.scss',
      /*'css/blocks/checkbox-list.css' : PATHS.source + '/blocks/elements/checkbox-list/checkbox-list.scss',
      'css/blocks/checkbox-list-expandable.css' : PATHS.source + '/blocks/elements/checkbox-list-expandable/checkbox-list-expandable.scss',
      'js/blocks/checkbox-list-expandable.js' : PATHS.source + '/blocks/elements/checkbox-list-expandable/checkbox-list-expandable.js',
      'css/blocks/comment-block.css' : PATHS.source + '/blocks/elements/comment-block/comment-block.scss',
      'css/blocks/dropdown.css' : PATHS.source + '/blocks/elements/dropdown/dropdown.scss',
      'js/blocks/dropdown.js' : PATHS.source + '/blocks/elements/dropdown/dropdown.js',
      'css/blocks/footer.css' : PATHS.source + '/blocks/elements/footer/footer.scss',
      'css/blocks/footerSimple.css' : PATHS.source + '/blocks/elements/footerSimple/footerSimple.scss',
      'css/blocks/header.css' : PATHS.source + '/blocks/elements/header/header.scss',
      /*'css/blocks/.css' : PATHS.source + '/blocks/elements/infoBlock/infoBlock.scss',
      'css/blocks/.css' : PATHS.source + '/blocks/elements/inputText/inputText.scss',
      'css/blocks/.css' : PATHS.source + '/blocks/elements/like/like.scss',
      'css/blocks/.css' : PATHS.source + '/blocks/elements/like/like.js',
      'css/blocks/.css' : PATHS.source + '/blocks/elements/link/link.scss',
      'css/blocks/.css' : PATHS.source + '/blocks/elements/listBlock/listBlock.scss',
      'css/blocks/.css' : PATHS.source + '/blocks/elements/pagination/pagination.scss',
      'css/blocks/.css' : PATHS.source + '/blocks/elements/radiogroup/radiogroup.scss',
      'css/blocks/.css' : PATHS.source + '/blocks/elements/rangeSlider/rangeSlider.scss',
      'css/blocks/.css' : PATHS.source + '/blocks/elements/rateBtn/rateBtn.scss',
      'css/blocks/.css' : PATHS.source + '/blocks/elements/rateBtn/rateBtn.js',
      'css/blocks/.css' : PATHS.source + '/blocks/elements/toggleBlock/toggleBlock.scss',
      'css/blocks/.css' : PATHS.source + '/blocks/elements/toggleBlock/toggleBlock.js',
      'css/blocks/.css' : PATHS.source + '/blocks/elements/topicLabel/topicLabel.scss',
      'css/pages/.css' : PATHS.source + '/pages/ui-kit_colorType/ui-kit_colorType.scss',
      'css/pages/.css' : PATHS.source + '/pages/ui-kit_headerFooter/ui-kit_headerFooter.scss',
      'css/pages/.css' : PATHS.source + '/pages/ui-kit_cards/ui-kit_cards.scss',
      'css/blocks/.css' : PATHS.source + '/blocks/cards/form-search-num/form-search-num.scss',
      'css/blocks/.css' : PATHS.source + '/blocks/cards/calendar/calendar.scss',
      'css/blocks/.css' : PATHS.source + '/blocks/cards/calendar/calendar.js',
      'css/blocks/.css' : PATHS.source + '/blocks/cards/form-registration/form-registration.scss',
      'css/blocks/.css' : PATHS.source + '/blocks/cards/form-reservation/form-reservation.scss',
      'css/blocks/.css' : PATHS.source + '/blocks/cards/form-sign-in/form-sign-in.scss',
      'css/blocks/.css' : PATHS.source + '/blocks/cards/card-room/card-room.scss',
      'css/blocks/.css' : PATHS.source + '/blocks/cards/card-room/card-room.js',
      'css/pages/.css' : PATHS.source + '/pages/ui-kit_formElements/ui-kit_formElements.scss',
      'css/pages/.css' : PATHS.source + '/pages/landingPage/landingPage.scss',
      'css/pages/.css' : PATHS.source + '/pages/searchRoom/searchRoom.scss',
      'css/pages/.css' : PATHS.source + '/pages/registration/registration.scss',
      'css/pages/.css' : PATHS.source + '/pages/signIn/signIn.scss',
      'css/pages/detailsRoom/detailsRoom.scss' : PATHS.source + '/pages/detailsRoom/detailsRoom.scss',*/
    },
    output: {
      path: PATHS.build,
      filename: '[name]'
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
      new MiniCssExtractPlugin({
        filename: 'css/[name].css'
      })
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
      //extractCSS()
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



