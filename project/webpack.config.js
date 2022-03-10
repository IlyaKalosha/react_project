const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlagin = require('html-webpack-plugin')
module.exports = {
    mode: "development",
    entry: ["@babel/polyfill", "./src/index.jsx"],
    output: {
        path: path.resolve(__dirname, "webpack"),
        filename: "[name].[hash].js"
    },
    devServer: {
        port: 3000
    },
    plugins: [
        new HTMLWebpackPlagin({template: "./src/index.html"}),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(svg)/,
                use: ['file-loader']
            },
            {
                test: /.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
}