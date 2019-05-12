

const {resolve} = require('path'); //node内置核心模块，用来设置路径。

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/js/app.js',   // 入口文件
	output: {                     // 输出配置
		filename: 'js/built.js',      // 输出文件名
		path: resolve(__dirname, 'build')   //输出文件路径配置
	},
	module: {
		rules: [
			{
				enforce:'pre',
				test: /\.js$/,  //只检测js文件
				exclude: /node_modules/,  //排除node_modules文件夹
				include: [resolve(__dirname,'src/js')],
				enforce: "pre",  //提前加载使用
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
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}, {
					loader: "less-loader"
				}]
			},
			{
				test: /\.(png|jpg|gif|webp)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							outputPath: './images',   //在output基础上，修改输出图片文件的位置
							publicPath: './images',  //修改背景图引入url的路径
							limit: 8192,  // 8kb大小以下的图片文件都用base64处理
							name: '[hash:4].[ext]'  // hash值为7位，ext自动补全文件扩展名
						}
					}
				]
			},
			{
				test: /\.(html)$/,
				use: {
					loader: 'html-loader'
				}
			}

		]
	},
	plugins:[
		new HtmlWebpackPlugin({
		template: './src/index.html'
	}),
	],
	mode: 'development'   //开发环境(二选一)

};










