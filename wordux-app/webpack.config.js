const { resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: __dirname,
  entry: ['./index.js', './index.scss'],
  output: {
    path: resolve(__dirname, 'dist'),
  },
  devServer: {
    static: resolve(__dirname, 'dist'),
    open: true,
    port: 1337,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
      },
    },
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
