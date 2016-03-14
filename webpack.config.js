'use strict';

var babelConfig = {
    optional: ['runtime']
};

module.exports = {
    context: __dirname + '/src/',
    entry: ['./index.js'],
    output: {
        path: __dirname + '/public/javascripts/',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.json', '.jsx'],
    },
    resolveLoader: { root: __dirname + "/node_modules" },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react'},
            { test: /\.json$/, loader: 'json' }
        ]
    }
};
