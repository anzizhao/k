var path = require('path');
var webpack = require('webpack');
var merge = require('merge');
// Import the plugin:
var DashboardPlugin = require('webpack-dashboard/plugin');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');
//var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var webpackConfig = {
    output: {
        path: path.join(__dirname, '/js/dist/'),
        filename: '[name].bundle.js',
        publicPath: '/js/dist/'
    },
    externals: {
        //"jquery": "jQuery"
    },
    resolve: {
        extensions: ['', '.js'],
        //alias: {
            //js: __dirname + '/js', 
            //jquery: __dirname + '/js/jquery.min'
        //}
    },

    module: {
        loaders: [
            //{
                //test: /\.html/, 
                //include: path.resolve(__dirname, 'tpl/ares'),
                //loader:'art-template' 
            //},
            {
                test: /\.html/, 
                include: [
                    path.resolve(__dirname, 'tpl/ares'), 
                    path.resolve(__dirname, 'tpl/articles')],
                loader:'tmodjs' 
            },
            { 
                test: /\.(png|jpg|gif|jpeg)$/, 
                loader: 'url?limit=8192'
            },
            {
                test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)?$/,
                loader: 'url?limit=8192'
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'styles/'),
                loader: 'style!css?sourceMap=true'
            },
        ]
    },

    devtool: 'source-map',
    //devtool: 'eval',
    //plugins: [   
        //new webpack.ProvidePlugin({
            //$: "jquery",
            //jQuery: "jquery",
            //"window.jQuery": "jquery"
        //})
    //]
};


if (process.env.NODE_ENV === 'production') {
    webpackConfig = merge(webpackConfig,{
        entry : {
            ares:  [
                './js/ares',
            ],
            article:  [
                './js/article',
            ],
        },
    });
}else{
    webpackConfig = merge(webpackConfig,{
        entry :{
            ares:  [
                'webpack-dev-server/client?http://localhost:3109',
                'webpack/hot/only-dev-server',
                './js/ares',
            ],
            article:  [
                'webpack-dev-server/client?http://localhost:3109',
                'webpack/hot/only-dev-server',
                './js/article',
            ],
        } ,
        plugins : [
            new webpack.HotModuleReplacementPlugin(),
            new DashboardPlugin(),
        ]  
    });
}




module.exports = webpackConfig;
