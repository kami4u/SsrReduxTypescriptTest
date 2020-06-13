const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// process.env.NODE_ENV = "production";

module.exports = {
  mode: "development",
  target: "web",
  devtool: "source-map", //To include map for the dev tools
  entry: "./src/App.tsx",
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    // Just use this to analyze the bundle
    // new webpackBundleAnalyzer.BundleAnalyzerPlugin({ analyzerMode: "static" }),
    new MiniCssExtractPlugin({ filename: "[name].css" }),
    new webpack.DefinePlugin({
      // This global makes sure React is built in prod mode.
      "process.env.NODE_ENV": JSON.stringify("development"),
      "process.env.API_URL": JSON.stringify("http://localhost:3001"),
    }),
  ],
  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: { loader: "awesome-typescript-loader" },
      },
      {
        test: /(\.css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { sourceMap: true } },
          {
            loader: "postcss-loader",
            options: { plugins: () => [require("cssnano")], sourceMap: true },
          },
        ],
      },
    ],
  },
};
