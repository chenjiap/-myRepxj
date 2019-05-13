

const {resolve} = require('path'); //node内置核心模块，用来设置路径。

const HtmlWebpackPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
	entry: './src/js/app.js',   // 入口文件
	output: {                     // 输出配置
		filename: 'js/built.js',      // 输出文件名
		path: resolve(__dirname, '../build') ,  //输出文件路径配置
		publicPath:'/'
	},
	module: {
		rules: [
			{
				enforce:'pre',
				test: /\.js$/,  //只检测js文件
				exclude: /node_modules/,  //排除node_modules文件夹
				include: [resolve(__dirname,'../src/js')],
				use: { //使用eslint-loader解析
					loader: "eslint-loader"
				}
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
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
				]
			},
			{
				test: /\.(png|jpg|gif|webp)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							outputPath: 'images',   //在output基础上，修改输出图片文件的位置
							publicPath: '/images',  //修改背景图引入url的路径
							limit: 8192,  // 8kb大小以下的图片文件都用base64处理
							name: '[hash:4].[ext]'  // hash值为7位，ext自动补全文件扩展名
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
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader'
				}
			},
			{
				test: /\.(eot|svg|ttf|woff)$/,
				loader: 'file-loader',
				options: {
					outputPath: 'media',   //在output基础上，修改输出图片文件的位置
					publicPath: '/media',  //修改背景图引入url的路径
					name: '[hash:4].[ext]'  // hash值为7位，ext自动补全文件扩展名
				}

			}

		]
	},
	plugins:[
		new HtmlWebpackPlugin({
		template: './src/index.html'
	}),
		new MiniCssExtractPlugin({
			filename: "css/[name].[hash:8].css",
			chunkFilename: "css/[id].[hash:8].css"
		}),
		new OptimizeCssAssetsPlugin({
			cssProcessorPluginOptions: {
				preset: ['default', { discardComments: { removeAll: true } }],
			},
		}),
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
		})
	],
	mode:'production',
};










