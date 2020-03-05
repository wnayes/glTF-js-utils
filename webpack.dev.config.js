const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    demo: "./src/demo.ts"
  },
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
  // output: {
  //   libraryTarget: "umd",
  //   library: "GLTFUtils",
  //   filename: "gltfutils.js",
  //   path: path.resolve(__dirname, "dist"),
  //   globalObject: "typeof self !== 'undefined' ? self : this"
  // },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    // historyApiFallback: true,
    compress: true,
    port: 8081
  }
};

