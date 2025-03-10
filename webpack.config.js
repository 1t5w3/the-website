const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",

  entry: {
    home: "./index.js",
    about: "./src/pages/about.js",
    contact: "./src/pages/contact.js",
    games: "./src/pages/games.js",      
    projects: "./src/pages/projects.js",
    BPcounter: "./src/pages/BPcounter.js",
    todo: "./src/pages/todo.js"
  },

  output: {
    filename: "[name].bundle.js", 
    path: path.resolve(__dirname, "dist"),
    clean: true, 
  },

  devServer: {
    watchFiles: ["./src/templates/*.html"],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      chunks: ["home"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/about.html",
      filename: "about.html",
      chunks: ["about"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/contact.html",
      filename: "contact.html",
      chunks: ["contact"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/todo.html",
      filename: "todo.html",
      chunks: ["todo"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/games.html",
      filename: "games.html",
      chunks: ["games"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/projects.html",
      filename: "projects.html",
      chunks: ["projects"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/BPcounter.html",
      filename: "BPcounter.html",
      chunks: ["BPcounter"],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
