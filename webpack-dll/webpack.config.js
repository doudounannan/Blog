const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const manifest = require('./vendor-manifest.json');

module.exports = {
  mode: 'development',
  entry: './main.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle-[hash:5].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
      title: 'index',
      template: './index.html',
      filename: 'index.html'
    }),
    new webpack.DllReferencePlugin({
      manifest
    })
  ]
}