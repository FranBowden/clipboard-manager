const rules = require("./webpack.rules");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // ... other rules ...
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".css"],
  },
};
