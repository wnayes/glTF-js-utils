const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    libraryTarget: "umd",
    library: "GLTFUtils",
    filename: "gltfutils.js",
    path: path.resolve(__dirname, "dist"),
    globalObject: "typeof self !== 'undefined' ? self : this"
  }
};