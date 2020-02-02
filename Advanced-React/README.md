# Project Setup for a full stack JavaScript Node and React application

## Packages

### eslint
- yarn add --dev eslint
- initialize eslint with yarn eslint -- --init
- yarn add --dev eslint-plugin-react babel-eslint

## pm2
- yarn add pm2
- Add the below for a start script to package.json

```json
...
"scripts": {
    "dev": "pm2 start lib/server.js --watch"
},
...

```

- run yarn dev
- run yarn pm2 logs

## babel
- Add the below to package.json

```json

...
"babel": {
	"presets": ["react", "env", "stage-2"]
},
...

```

- Change the run script to include "--interpreter babel-node"

- yarn add babel-cli babel-preset-react babel-preset-env babel-preset-stage-2

- To fix "Uncaught ReferenceError: regeneratorRuntime is not defined" yarn add babel-polyfill

## React and webpack

Project setup instructions for running Node and React app on the same port with React application being bundled into a bundle.js file. The node.js ap

- yarn add react react-dom webpack
- yarn add babel-loader@7.1.5 (Version 8 gives an error)
- Create a webpack.config.js file

```javascript

const path = require('path');

module.exports = {
	entry: [
		'babel-polyfill', // Used to fix "Uncaught ReferenceError: regeneratorRuntime is not defined" error
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

