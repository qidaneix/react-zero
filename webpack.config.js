const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
  },
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".jsx", "..."],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
      },
    ],
  },
  devtool: "eval-source-map",
  devServer: {
    port: 9000,
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
};
