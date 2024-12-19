// webpack.config.js

// Base webpack config for handling html, css and images.
// For both on development and production mode

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  // Dev mode configuration
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },

  plugins: [
    // Handling HTML
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [

      // Load CSS including img rules
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      // Load images from HTML using HTML-Loader
      {
        test: /\.html$/i,
        loader: "html-loader",
      },

      // Load images on JavaScript via asset/resource rule
      {
        // Regex for file extension
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
