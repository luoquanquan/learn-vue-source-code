const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 入口
    entry: './src/index.js',

    // 产出
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    devtool: 'source-map',

    resolve: {
        // 配置这个基础路径的时候一定要在最后配上原生 node_modules 目录否则会导致 
        // node_modules 里边的模块找不到
        modules: [
            path.resolve(__dirname, 'source'),
            path.resolve(__dirname, 'node_modules')
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html')
        })
    ]
}