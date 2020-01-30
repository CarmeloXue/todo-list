const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = 'development'

module.exports = {
  mode: "production",
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle-[hash].js"
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/index.html"
    })
  ]
};
