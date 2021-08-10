const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pug = require('./webpack/pug');
const html = require('./webpack/html');
const sass = require('./webpack/sass');
const images = require('./webpack/images');
const font = require('./webpack/font');
const ts = require('./webpack/typescript');

const paths = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'docs'),
};

const pluginsDate = [
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
  }),
  new HtmlWebpackPlugin({
    title: 'Webpack app',
    filename: 'index.html',
    chunks: ['index'],
    template: paths.source + '/index.pug',
  }),
];

const entryDate = {
  'index.js': paths.source + '/index.ts',
  'layout.js': paths.source + '/blocks/layout/layout.ts',
};

const pages = [
  'landing-page',
  'registration',
  'sign-in',
  'search-room',
  'details-room',
  'ui-kit-form-elements',
  'ui-kit-cards',
  'ui-kit-header-footer',
  'ui-kit-color-type',
];

pages.map((event) => {
  return pluginsDate.push(
    new HtmlWebpackPlugin({
      filename: `${event}.html`,
      chunks: [`${event}`],
      template: paths.source + `/pages/${event}/${event}.pug`,
    })
  );
});

pages.map((event) => {
  return Object.assign(entryDate, {
    [event + '.js']: paths.source + `/pages/${event}/${event}.ts`,
  });
});

const common = merge([
  {
    mode: 'production',
    devtool: 'inline-source-map',
    entry: entryDate,
    output: {
      path: paths.build,
      filename: 'js/[name]',
    },
    resolve: {
      alias: {
        '@Blocks': path.resolve(__dirname, 'src/blocks/'),
        '@Pages': path.resolve(__dirname, 'src/pages/'),
        '@': path.resolve(__dirname, 'src/'),
      },
    },
    plugins: pluginsDate,
  },

  pug(),
  html(),
  sass(),
  font(),
  images(),
  ts(),
]);

const developmentConfig = {
  mode: 'development',
  devServer: {
    stats: 'errors-only',
    port: 9000,
  },
};

const productionConfig = {
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
};

module.exports = function (env) {
  if (env.conf === 'development') {
    return merge([common, developmentConfig]);
  }

  if (env.conf === 'production') {
    return merge([common, productionConfig]);
  }
};
