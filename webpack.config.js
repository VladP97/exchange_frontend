const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractLoader = require('mini-css-extract-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      assets: path.resolve(__dirname, 'src', 'assets'),
      components: path.resolve(__dirname, 'src', 'components'),
      containers: path.resolve(__dirname, 'src', 'containers'),
      actions: path.resolve(__dirname, 'src', 'actions'),
      reducers: path.resolve(__dirname, 'src', 'reducers'),
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          MiniCssExtractLoader.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/socket.io/**': {
          target: 'http://localhost:8080',
          secure: false,
          changeOrigin: true
      }
  }
  },
  plugins: [
    new MiniCssExtractLoader({
      filename: 'style.css',
    }),
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, '', 'index.html'),
    //   filename: 'index.html',
    //   stats: { children: false }
    // }),
  ],
}