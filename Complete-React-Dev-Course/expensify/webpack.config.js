const path = require('path'); // used to join paths for multiple OS compatability

module.exports = {
    entry: './src/playground/redux-101.js',
    output: {
        path: path.join(__dirname, 'public'),   // __dirname gives the absolute path on the current users computer
        filename: 'bundle.js'
    },
    // loader. Need to install babel-core and babel-loader to use
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                // array of loaders (installed style-loader, css-loader, sass-loader, & node-sass through yarn)
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true    // Tells react to render the index.html page for all routes
    }   // run yarn add webpack-dev-server to have access to devServer
    
};
