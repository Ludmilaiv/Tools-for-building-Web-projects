const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require( 'path' );
module.exports = {
  entry: './src/main.js',
  output: {
    path: resolve( __dirname, 'build' ),
    filename: 'main.[contenthash].js'
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin( {
      template: resolve( __dirname, 'index.html' )
    } )
  ],
  module: {
    rules: [ 
      {
        test: /\.(png|jpe?g|gif|mp3)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      }
    ]
  },
  devServer: {
    port: 3000
  }
};