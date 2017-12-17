const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'webapp/build');
const APP_DIR = path.resolve(__dirname, 'webapp/dev');

module.exports = {
    entry: APP_DIR + '/app.js',
    output: {
        path: BUILD_DIR,
        filename: 'app.js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel-loader'
            }
        ]
    }
};
