module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.(png|svg|jpg|jpeg|gif)$/i,
					//type: 'asset/resource',
					loader: 'file-loader',
										
					
					/*options: {	
						name: 'images/[name].[contenthash].[ext]'
					}
					/*use: [
            'url-loader', 
            'html-loader',
            'file-loader',
          ]*/
				},
			]
		}
	};
};