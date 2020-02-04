# Project Setup for a full stack JavaScript Node and React application

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
		'./lib/react/Index.js'  // React Entry point
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

### Jest Component testing
- yarn add --dev react-test-renderer (To test react components)

```javascript

import React from 'react';
import ArticleList from '../components/ArticleList';

import renderer from 'react-test-renderer';

describe('ArticleList', () => {

	const testProps = {
		articles: {
			a: {id: 'a'},
			b: {id: 'b'}
		},
		articleActions: {
			lookupAuthor: jest.fn(() => ({})),
		}
	}

	it('renders correctly', () => {
		const tree = renderer.create(
			<ArticleList 
				{...testProps}
			/>
		).toJSON();

		expect(tree).toMatchSnapshot(); // Takes a snapshot the first time the test is run. And compares the snapshot taken to each following snapshot. The snapshot is saved in the __snapshots__ folder
		// Making any changes to component will cause the test to fail, but you could inspect the changes in the console and press u to update the snapshot
	});


});

```

## Server Side Rendering of React Components
- Used for better performance and in case JavaScript is disabled in browser

serverRender.js
```javascript

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './react/App';

const serverRender = () => {
	return ReactDOMServer.renderToString(
		<App />
	);
};

export default serverRender;

```

```javascript
import serverRender from './serverRender';

app.get('/', (req, res) => {
	const initialContent = serverRender();	// Used to render the app from Server if JavaScript is disabled in the browser
	res.render('index', {initialContent});
});

```

## Absolute import paths

```javascript
// package.json
...
"scripts": {
	"dev": "NODE_PATH=./lib ...",	// require import paths will now start in lib
	...
}

...

```

```javascript
//webpack.config
const config = {
	resolve: {
		modules: [
			// Gets tests to start from lib path
			path.resolve('./lib'),
			path.resolve('./node_modules')
		]
	},
	//...
}
```