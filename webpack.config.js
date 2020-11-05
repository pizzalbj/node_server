// https://www.webpackjs.com/guides/

const rf = require("fs");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin'); // 官方文档不正确
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

var entry = {
    printMy: './src/print.js',
    index: './src/index.js',
}

rf.readdirSync('./src/rxjs').filter(function (f) {
    return f.indexOf('.js') != -1
}).forEach(function (n) {
    var path = n.substring(0, n.length - 3);
    entry[path] = './src/rxjs/' + n;
})

module.exports = {
    entry: entry,
    devtool: 'inline-source-map',  // 报错时可以查看是哪个js文件报错
    devServer: {  // 告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。
        contentBase: './dist',
        hot: true
    },
    plugins: [
        // new CleanWebpackPlugin(['dist']), // 官方文档不正确
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.NamedModulesPlugin(), // 以便更容易查看要修补(patch)的依赖
        new webpack.HotModuleReplacementPlugin(),
        // webpack.optimize.CommonsChunkPlugin has been removed, please use config.optimization.splitChunks instead.
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common'  // 指定公共 bundle 的名称
        // })
    ],
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js', // 它决定非入口 chunk 的名称
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    },
    mode: "production"  // 可以压缩输出
}