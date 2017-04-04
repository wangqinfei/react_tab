var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry:[
        './src/TabBox.js'
    ],
    output:{
        path:__dirname +'/public',
        filename:'bundle.js'
    },
    module:{
        loaders:[{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/, loader: "style-loader!css-loader"},
            { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"},
            { test: /\.svg$/, loader: "url-loader?limit=8192"}
        ]
    },
    resolve:{
        extensions:[' ','.js']
    }

};