const path = require('path'); // used to join paths for multiple OS compatability

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),   // __dirname gives the absolute path on the current users computer
        filename: 'bundle.js'
    }
};