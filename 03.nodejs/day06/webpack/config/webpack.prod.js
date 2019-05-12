

const {resolve} = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {

	entry:'./src/js/app.js',
	output: {
		path: resolve(__dirname,'../build'),
		filename: "js/built.js",
		publicPath: "/"
	},
	module: {
		rules:[
			{
				enforce: "pre",
				test: /\.js$/,
				exclude: /node_modules/,
				include: [resolve(__dirname,'../src/js')],
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

					MiniCssExtractPlugin.loader,
						 'css-loader',

					    'postcss-loader',
						 'less-loader',

				],
			},
			{
				test: /\.(png|jpg|gif|webp)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
							publicPath:'/images',
							outputPath:'images',
							name:'[hash:5].[ext]'
						}
					},
					{
						loader: 'img-loader',
						options: {
							plugins: [
								require('imagemin-gifsicle')({
									interlaced: false
								}),
								require('imagemin-mozjpeg')({
									progressive: true,
									arithmetic: false
								}),
								require('imagemin-pngquant')({
									floyd: 0.5,
									speed: 2
								}),
								require('imagemin-svgo')({
									plugins: [
										{ removeTitle: true },
										{ convertPathData: false }
									]
								})
							]
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
							publicPath:'/media',
							outputPath:'media',
							name:'[hash:5].[ext]'
						}
					}
				]
			}

		]
	},
	mode:'production',

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true,
			}
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
			//chunkFilename: '[id].css',
		}),
		new OptimizeCssAssetsPlugin({
			cssProcessorPluginOptions: {
				preset: ['default', { discardComments: { removeAll: true } }],
			},
		})
	]




}




