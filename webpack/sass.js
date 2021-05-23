module.exports = function(paths) {
  return {
    module: {
      rules: [
      {
        test: /\.scss$/i,
        include: paths,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
      ]
    }
  };
};