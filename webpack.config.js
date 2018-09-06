"use strict"
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	mode : "development",
	entry : {
		pos : "./src/index.js"
	},
	output : {
		path : path.resolve(__dirname + "/dist")
	},
	module : {
		rules : [
			{
				test: /\.vue$/,
				loader: "vue-loader",
				options: {
					loaders: {
						"scss": [
							"vue-style-loader",
							"css-loader",
							"sass-loader"
						],
						"sass": [
							"vue-style-loader",
							"css-loader",
							"sass-loader?indentedSyntax"
						]
					}
				}
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/
			},
			{
				test : /\.scss/,
				use : [
					"style-loader",
					"css-loader",
					"sass-loader"
				]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: "index.html",
			filename: "index.html",
			inject: true
		})
	],
	resolve: {
		alias: {
			"vue$": "vue/dist/vue.esm.js"
		},
		extensions: ["*", ".js", ".vue", ".json"]
	}
};