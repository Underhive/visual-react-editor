module.exports = {
  entry: "./index.ts",
  output: {
    filename: 'index.js',
    library: 'underhive',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  // Enable sourcemaps for debugging webpack's output.
  // devtool: "source-map",
  optimization: {
    minimize: true,
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".css"],
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      { test: /\.tsx?$/, loader: "ts-loader" },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: "source-map-loader" },
      { test: /\.css$/, use: 'css-loader' },
    ],
  },
  mode: "production",
  devServer: {
    hot: true,
    inline: true,
    host: "localhost",
    port: 8082,
    watchOptions: {
        poll: true
    }
  }
};
