import webpack from "webpack";

export default {
  entry: "./src/index.ts",
  experiments: {
    outputModule: true,
  },
  externals: ["node-fetch"],
  mode: "production",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.ts?$/,
        use: "ts-loader",
      },
    ],
  },
  output: {
    library: {
      type: "module",
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      __BROWSER__: JSON.stringify(true),
    }),
  ],
  resolve: {
    extensions: [".js", ".ts"],
  },
};
