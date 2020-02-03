const path = require('path');

module.exports = {
	entry: [
		'@babel/polyfill', // Used to fix "Uncaught ReferenceError: regeneratorRuntime is not defined" error
		'./lib/components/Index.js'  // React Entry point
	],
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			// Excluding node_modules speeds up the process
			{
				test: /\.js$/, 
				exclude: /node_modules/, 
				use: 'babel-loader'
			},
			{
				test: /\.s[ac]ss$/i,
				exclude: /node_modules/,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
		]
	}
};