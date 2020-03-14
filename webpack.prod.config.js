const path = require("path");

module.exports = {
  mode: "production",
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
    three: "three",
    jszip: "jszip"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  output: {
    libraryTarget: "umd",
    library: "GLTFUtils",
    filename: "gltfutils.min.js",
    path: path.resolve(__dirname, "dist"),
    globalObject: "typeof self !== 'undefined' ? self : this"
  }
};
