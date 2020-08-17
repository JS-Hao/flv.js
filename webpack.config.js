const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "flv.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },

      {
        test: /\.css$/,
        include: /node_modules/,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "demo"),
    compress: true,
    disableHostCheck: true,
    port: 3001,
    host: "0.0.0.0",
  },
};
