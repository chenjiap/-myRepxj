

const {resolve} = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');


module.exports = {

	entry:'./src/js/app.js',
	output: {
		path: resolve(__dirname,'build'),
		filename: "js/built.js"
	},
	module: {
		rules:[
			{
				enforce: "pre",
				test: /\.js$/,
				exclude: /node_modules/,
				include: [resolve(__dirname,'src/js')],
				loader: "eslint-loader",
				options: {

				}

			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}


			},
			{
				test: /\.less$/,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'less-loader',
					},
				],
			},
			{
				test: /\.(png|jpg|gif|webp)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
							publicPath:'images',
							outputPath:'images',
							name:'[hash:5].[ext]'
						}
					}
				]
			},
			{test: /\.(html)$/,
				use: {
					loader: 'html-loader',
				}},
			{
				test: /\.(eot|svg|ttf|woff)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							limit: 8192,
							publicPath:'media',
							outputPath:'media',
							name:'[hash:5].[ext]'
						}
					}
				]
			}

		]
	},
	mode:'development',

	plugins: [
		new HtmlWebpackPlugin({template: './src/index.html'}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],

	devServer: {
		contentBase: resolve(__dirname, "build"),
		compress: true,
		port: 3002,
		hot: true,
		open:true
	}


}




