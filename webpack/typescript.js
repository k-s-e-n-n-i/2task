module.exports = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.(tsx|ts|js)$/i,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
  };
};