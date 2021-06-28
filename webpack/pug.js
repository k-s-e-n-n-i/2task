module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.pug$/i,
          loader: 'pug-loader',
          options: {
            pretty: true,
          },
        },
      ],
    },
  };
};
