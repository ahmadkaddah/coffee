var path = require('path');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {

    entry: {
        app: "./src/index.js",
    },

    output: {
        path: path.join(__dirname, "/dist"),
        publicPath: '',
        filename: "main.js"
    },

    mode: "development",

    devServer: {
        contentBase: path.join(__dirname, '/dest'),
        port: 1266,
        writeToDisk: true,
        open: true,
    },

    module: {
        rules: [

            {
                test: require.resolve('jquery'),
                loader: 'expose-loader',
                options: {
                    exposes: ['$', 'jQuery'],
                }
            },
            
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },

            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: "images",
                        }
                    }
                ]
            },


            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        // options: {
                        //     minimize: true,
                        // }
                    }
                ]
            },
        ]
    },


    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
        }),

        new HtmlWebpackPlugin({
            filename: "product.html",
            template: "./src/product.html",
        }),

        new HtmlWebpackPlugin({
            filename: "product2.html",
            template: "./src/product2.html",
        }),

        new HtmlWebpackPlugin({
            filename: "product3.html",
            template: "./src/product3.html",
        }),

        new HtmlWebpackPlugin({
            filename: "checkout.html",
            template: "./src/checkout.html",
        }),

        new HtmlWebpackPlugin({
            filename: "payment.html",
            template: "./src/payment.html",
        }),

        new HtmlWebpackPlugin({
            filename: "contact.html",
            template: "./src/contact.html",
        }),

        new HtmlWebpackPlugin({
            filename: "about.html",
            template: "./src/about.html",
        }),


        new MiniCssExtractPlugin({ filename: "css/style.css" }),
        new OptimizCssAssetsPlugin({}),
    ],
};
