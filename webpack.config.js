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
        rules : [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        'es2015'
                    ],
                    plugins: [
                        ['transform-react-jsx', { pragma: 'h' }]
                    ]
                }
            }
        ]
    }
};
