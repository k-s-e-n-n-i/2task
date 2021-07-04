const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function recursiveIssuer(m, c) {
  const issuer = c.moduleGraph.getIssuer(m);

  if (issuer) {
    return recursiveIssuer(issuer, c);
  }

  const chunks = c.chunkGraph.getModuleChunks(m);

  for (const chunk of chunks) {
    return chunk.name;
  }

  return false;
}

module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        },
      ],
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          fooStyles: {
            name: 'styles_foo',
            test: (m, c, entry = 'foo') =>
              m.constructor.name === 'CssModule' && recursiveIssuer(m, c) === entry,
            chunks: 'all',
            enforce: true,
          },
          barStyles: {
            name: 'styles_bar',
            test: (m, c, entry = 'bar') =>
              m.constructor.name === 'CssModule' && recursiveIssuer(m, c) === entry,
            chunks: 'all',
            enforce: true,
          },
        },
      },
      minimize: false,
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: '[id].css',
        linkType: 'text/css',
      }),
    ],
  };
};
