const path = require("path");
const currentDirectory = path.resolve(__dirname);

module.exports = {
  mode: "development",
  entry: "./demo.ts",
  context: currentDirectory,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    three: "three",
    jszip: "jszip"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    filename: "demo.js",
    path: currentDirectory,
    globalObject: "typeof self !== 'undefined' ? self : this"
  }
};
