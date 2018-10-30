const resolve = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  context: resolve(__dirname, 'src'),
  entry: {
    app: ['babel-polyfill', './index.js']
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/donut'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]'
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader', {
            loader: MiniCssExtractPlugin.loader
          }
        ]
      }, {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader?url=false'
          }, {
            loader: 'sass-loader?url=false'
          }
        ]
      }, {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }, {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: ['file-loader?hash=sha512&digest=hex&name=img/[name].[ext]']
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({options: {}}),
    new HtmlWebpackPlugin({filename: 'index.html', template: 'index.ejs', baseUrl: '/donut/', inject: false}),
    new CopyWebpackPlugin([
      {
        from: './*.*',
        to: resolve(__dirname, 'dist'),
        ignore: ['*.ejs']
      }
    ])
  ]
}
