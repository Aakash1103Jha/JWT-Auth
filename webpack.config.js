const path = require("path")
const webpack = require("webpack")
const nodeExternals = require("webpack-node-externals")

module.exports = {
	mode: "development",
	entry: path.resolve(__dirname, "server.js"),
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "bundle.js",
	},
	target: "node",
	node: {
		// Need this when working with express, otherwise the build fails
		__dirname: false, // if you don't put this is, __dirname
		__filename: false, // and __filename return blank or /
	},
	externals: [nodeExternals()], // Need this to avoid error when working with Express
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.json$/,
				use: [{ loader: "json-loader" }],
			},
		],
	},
}
