const path = require('path');
var APP_DIR = path.resolve(__dirname, '../src'); //_dirname 代表当前文件的目录绝对路径
var BUILD_DIR = path.resolve(__dirname, '../dist');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //样式单独打包出来
const HtmlWebpackPlugin = require("html-webpack-plugin");
const entryDir = path.resolve(APP_DIR, 'input/index.tsx');//入口文件

//公共webpack规定打包入口和出口
module.exports = {
    //TODO: 函数自动识别入口
    entry: {
        input: path.resolve(APP_DIR, 'input/index.tsx'),
        upload: path.resolve(APP_DIR, 'upload/index.tsx')
    },

    output: {
        //输出路径
        path: BUILD_DIR,
        filename: '[name]/js/index.js?',
        chunkFilename: '[id]/js/chunk.js?'
    },
    externalsType: 'script',
    externals: {
        "react": ["https://cdn.bootcdn.net/ajax/libs/react/18.0.0-rc.3-next-033fe52b4-20220325/cjs/react-jsx-dev-runtime.development.js","React"],
        "react-dom": ["https://cdn.bootcdn.net/ajax/libs/react-dom/18.0.0-rc.3-next-033fe52b4-20220325/cjs/react-dom-server-legacy.browser.development.js","ReactDom"]
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                },
                exclude: /node_modules/,
            },
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                //exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // "style-loader",
                    "css-loader",

                ]
            },
            {
                test: /\.scss$/i,
                //exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.less$/i,
                //exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // "style-loader",
                    "css-loader",
                    {
                        loader: "less-loader",
                        options: {
                            javascriptEnabled: true,
                            //modifyVars: theme
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                exclude: /node_modules/,
                loader: "file-loader",
                options: {
                    name: '[name].[ext]?[contenthash:8]',
                    outputPath: './imgs',
                    publicPath: "/dist/imgs",
                    //publicPath: "//www.micstatic.com/xxx/imgs",
                    //emitFile:false
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // 类似 webpackOptions.output里面的配置 
            filename: '[name]/css/index.css',
            chunkFilename: "[id]/css/index.css"
        }),
        new HtmlWebpackPlugin({
            //选择模板
            template: path.resolve(__dirname, "../public/index.html"),
            templateParameters: {
                title: "TS-Webpack-React"
            },
            favicon: null
        }),
        /* new webpack.optimize.CommonsChunkPlugin({
            // vendor是包括公共的第三方代码，称为initial chunk
            name: 'vendor'
        }) */
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.less', '.json'],
        alias: {
            '@': path.resolve(__dirname, '../src'),
            '@CSS': path.resolve(__dirname, '../src/css'),
            '@IMG': path.resolve(__dirname, '../src/imgs'),
        }
    },
    optimization: {

    },
}