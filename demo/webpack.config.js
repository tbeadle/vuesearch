var path = require('path');
var webpack = require('webpack');

module.exports = {
	context: path.resolve(__dirname),
	entry: {
		'main': './index',
		'vendor': ['vue'],
	},
	output: {
		path: path.resolve(__dirname, 'bundles'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						// Since sass-loader (weirdly) has SCSS as its default parse mode, we map
						// the "scss" and "sass" values for the lang attribute to the right configs here.
						// other preprocessors should work out of the box, no loader config like this nessessary.
						'scss': 'vue-style-loader!css-loader!sass-loader',
						'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
					}
					// other vue-loader options go here
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015'],
				},
			},
		],
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendor.bundle.js',
		}),
		new webpack.optimize.UglifyJsPlugin({
			test: /vendor\.bundle\.js/,
		}),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
	],
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.common.js',
		},
	},
}