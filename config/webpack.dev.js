/*
 * @Author: niyongwei
 * @Date: 2022-03-24 15:34:02
 * @LastEditors: niyongwei
 * @LastEditTime: 2022-04-06 19:12:43
 * @FilePath: \components\config\webpack.dev.js
 * @Description: 
 * 
 * Copyright (c) 2022 by nyw, All Rights Reserved. 
 */
const {
    merge
} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
var BUILD_DIR = path.resolve(__dirname, '../lib');


module.exports = merge(common, {
    plugins: [


    ],
    output: {
        path: BUILD_DIR,
        publicPath: "lib/",
        //publicPath: "/",
        filename: '[name]/js/index.js',
        chunkFilename: '[id]/js/chunk.js'
    },
    mode: "development",
    // devtool: '#eval-source-map',
    devServer: {
        port: 3333,
        host: '127.0.0.1',
        hot: true,
        disableHostCheck: true,
    },
});