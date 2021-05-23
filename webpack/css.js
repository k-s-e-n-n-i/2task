const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    include: paths,
                    use: [
                        //MiniCssExtractPlugin.loader,
                        'style-loader',
                        'css-loader'
                    ]
                }
            ]
        }
    };
};