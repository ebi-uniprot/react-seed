
const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	context: __dirname,
	devtool: 'inline-sourcemap',
	entry: __dirname + '/src/index.js',
	output: {
		path: __dirname + '/build',
		filename: 'app.[hash].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [{
					loader: 'html-loader',
					options: { minimize: true }
				}]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: __dirname + '/public/index.html',
			filename: 'index.html'
		})
	],
	devServer: {
		contentBase: path.join(__dirname, 'build'),
		compress: true,
		port: 8080
	}
};