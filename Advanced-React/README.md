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

### babel
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