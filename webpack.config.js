const path = require("path");

module.exports = {
  mode: "none",
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
  externals: {
    jszip: "jszip"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    libraryTarget: "umd",
    library: "GLTFUtils",
    filename: "gltfjsutils.js",
    path: path.resolve(__dirname, "dist"),
    globalObject: "typeof self !== 'undefined' ? self : this"
  }
};
