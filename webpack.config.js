const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');



module.exports = {

	mode: 'development',
    devtool: 'inline-source-map',

	entry:{
		main: './src/index.js', 
		printS: './src/print.js'
	},

	output: {
		filename:'[name].[contenthash].bundle.js',
		path: path.resolve(__dirname,'dist')
	},

	module: {
		rules: [
			
			{
				test: /\.css$/,
				use:[
					{
			            loader: MiniCssExtractPlugin.loader,
			            options: {
			              // you can specify a publicPath here
			              // by default it uses publicPath in webpackOptions.output
			              publicPath: '../../',
			              hmr: process.env.NODE_ENV === 'development',
			              reloadAll: true,
			            },
			        },
					//'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: './dist/[hash].[ext]'
						}
					}
				]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},

	plugins: [
		
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Travel Buddy ',
			template: 'index.html'
		}),
		new MiniCssExtractPlugin({
	      // Options similar to the same options in webpackOptions.output
	      // both options are optional
	      filename: '[name].css',
	      chunkFilename: '[id].css',
	    }),

	],


	optimization: {
	    minimizer: [new UglifyJsPlugin({
	    	uglifyOptions: {
	          output: {
	            comments: false,
	          },
	        }
	    })],
	    splitChunks: {
	    	chunks:'all'
	    }
	}

}