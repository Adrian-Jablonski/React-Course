# Boilerplate for setting up React and Node.js to run on the same port using Webpack
- Node-sass also configured to use SCSS

## Packages

### eslint
- yarn add --dev eslint
- initialize eslint with yarn eslint -- --init
- yarn add --dev eslint-plugin-react babel-eslint

- Add "parser": "babel-eslint" to eslint file to get rid of "Parsing error: Unexpected token =eslint in code editor"


## babel
- Add the below to package.json

```json

...
"babel": {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ],
    "plugins": [
      [
        "@babel/plugin-proposal-class-properties"
      ]
    ]
  },
...

```

- Change the run script to include "--interpreter babel-node"

- yarn add @babel/cli @babel/core @babel/node @babel/plugin-proposal-class-properties @babel/preset-react @babel/preset-env

- To fix "Uncaught ReferenceError: regeneratorRuntime is not defined" yarn add @babel/polyfill

## React and webpack

Project setup instructions for running Node and React app on the same port with React application being bundled into a bundle.js file. The node.js ap

- yarn add react react-dom webpack
- yarn add babel-loader
- Create a webpack.config.js file

```javascript

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
			{ test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }
		]
	}
};

```

- After webpack is setup, add the following line to package.json to run the React application using yarn webpack


```json
"scripts": {
	//...
	"webpack": "webpack -wd" // w is to watch. d is for development
},

```

## Jest
JavaScript testing

- yarn add -- dev jest babel-jest

```javascript

"scripts": {
	//...
	"test": "jest --watch"
}

```

- To get rid of describe and expect errors from eslint, add the below in .eslintrc.js file

```javascript
"env": {
	//...
    "jest": true
},
	
```

## Node-Sass

- yarn add sass-loader node-sass css-loader style-loader --dev
- Add the below code to webpack.config.js file

```javascript

module: {
		rules: [
			// Excluding node_modules speeds up the process
			{
				test: /\.js$/, exclude: /node_modules/, use: 'babel-loader'
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
			}
		]
	}

```