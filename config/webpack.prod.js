/*
 * @Author: niyongwei
 * @Date: 2022-03-24 15:34:02
 * @LastEditors: niyongwei
 * @LastEditTime: 2022-03-29 17:42:20
 * @FilePath: /components/config/webpack.prod.js
 * @Description: 
 *    
 * Copyright (c) 2022 by nyw, All Rights Reserved. 
 */
const {
  merge
} = require("webpack-merge");
const common = require("./webpack.common.js");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require('webpack');

module.exports = merge(common, {
  mode: "production",
  //文件超出设定大小时提醒
  performance: {
    //入口起点的最大值
    maxEntrypointSize: 400000,
    hints: "warning"
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin()
    ],
    runtimeChunk: {
      name: "runtime",
    },
    chunkIds: "named",
    moduleIds: "deterministic",
    // splitChunks: {
    //   chunks: 'all',
    //   minSize: 1,
    //   minChunks: 1,
    //   maxAsyncRequests: 5,
    //   maxInitialRequests: 5,
    //   automaticNameDelimiter: '~',
    //   name: true,
    //   cacheGroups: {
    //     defaultVendors: {
    //       name: "vendors",
    //       test: /[\\/]node_modules[\\/].*\.(js|jsx|ts|tsx)$/,
    //       priority: -10
    //     },
    //     common: {
    //       name: "common",
    //       test: /[\\/]common[\\/].*\.(js|jsx|ts|tsx)$/,
    //       minSize: 1,
    //       priority: -10
    //     },
    //     default: false
    //   }
    // }
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
});