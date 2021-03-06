const path = require('path');

module.exports = {
    entry: [
        "./src/js/index.js",
        "./src/scss/index.scss"
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'docs')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
            test: /\.(scss|sass)$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader",
            }]
        }]
    },
    devServer: {
        stats: 'errors-only',
        historyApiFallback: {
            index: './docs/index.html'
        }
    },
    mode: 'production'
};