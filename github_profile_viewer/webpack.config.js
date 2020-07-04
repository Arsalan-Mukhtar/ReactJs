const path = require("path")
const rules = [
   {
      test: /\.js|\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
   }
]

module.exports = {
   target: "web",
   mode: "development",
   entry: "./src/index.js",
   output: {
      path: path.resolve(__dirname, "build"),
      filename: "app/js/main.js"
   },
   module: { rules },
   resolve: { extensions: [".ts", "tsx", ".js", ".jsx", ".json"] },
   devServer: {
      contentBase: "./",
      port: 5000
   }
}
