const webpack = require('webpack');
const config = require('sapper/config/webpack.js');
const pkg = require('./package.json');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const sapperEnv = require('sapper-environment');
const path = require('path');
const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const extensions = ['.mjs', '.js', '.json', '.svelte', '.html'];
const mainFields = ['svelte', 'module', 'browser', 'main'];

class TailwindExtractor {
	static extract(content) {
		return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
	}
}


module.exports = {

	api_url: process.env.API_URL,
  protocol: process.env.PROTOCOL || 'http',
	client: {
		entry: config.client.entry(),
		output: config.client.output(),
		resolve: { extensions, mainFields },
		module: {
			rules: [
				{
					test: /\.(svelte|html)$/,
					use: {
						loader: 'svelte-loader',
						options: {
							dev,
							hydratable: true,
							hotReload: false // pending https://github.com/sveltejs/svelte/issues/2377
						}
					}
				}
			]
		},
		mode,
		plugins: [
			// pending https://github.com/sveltejs/svelte/issues/2377
			// dev && new webpack.HotModuleReplacementPlugin(),
			new webpack.DefinePlugin({
				...sapperEnv(),
				'process.browser': true,
				'process.env.NODE_ENV': JSON.stringify(mode)
			})
		].filter(Boolean),
		devtool: dev && 'inline-source-map'
	},

	server: {
		entry: config.server.entry(),
		output: config.server.output(),
		target: 'node',
		resolve: { extensions, mainFields },
		externals: Object.keys(pkg.dependencies).concat('encoding'),
		module: {
			rules: [
				{
					test: /\.(svelte|html)$/,
					use: {
						loader: 'svelte-loader',
						options: {
							css: false,
							generate: 'ssr',
							dev
						}
					}
				},
				{
					test: /\.css$/,
					use: [
						MiniCssExtractPlugin.loader,
						"css-loader",
						{
							loader: "postcss-loader",
							options: {
								plugins: function() {
									return [
										require("postcss-import"),
										require("tailwindcss")("./tailwind.config.js"),
										require("autoprefixer"),
										// Do not purge the CSS in dev mode to be able to play with classes in the browser dev-tools.
										!dev &&
											require("@fullhuman/postcss-purgecss")({
												content: ["./**/*.html", "./**/*.svelte"],
												extractors: [
													{
														extractor: TailwindExtractor,

														// Specify the file extensions to include when scanning for
														// class names.
														extensions: ["html", "svelte"]
													}
												]
											})
									].filter(Boolean)
								}
							}
						}
					]
				}
			]
		},
		mode: process.env.NODE_ENV,
		performance: {
			hints: false // it doesn't matter if server.js is large
		},
		plugins: [
			new MiniCssExtractPlugin({
				// Options similar to the same options in webpackOptions.output
				// both options are optional
				filename: "../../../static/[name].css",
				chunkFilename: "[id].css"
			})
		]
	},

	serviceworker: {
		entry: config.serviceworker.entry(),
		output: config.serviceworker.output(),
		mode: process.env.NODE_ENV
	}
};
