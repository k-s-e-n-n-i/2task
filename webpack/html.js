module.exports = function () {
    return {
        module: {
            rules: [
              {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    esModule: false
                }
              },
            ],
        },
    }
};