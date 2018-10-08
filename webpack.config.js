const path = require('path');
const CopyWebpackPlugin = require("CopyWebpackPlugin");
// const indexPage = require("./src/index.html");


module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        watchContentBase: true,
        compress: true,
        port: 9001
    },
    // optimization: {

    // },
    plugins: [
      new CopyWebpackPlugin([
        { from: 'src/**/*' }
    ])
    ],
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          }
        ]
      },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    watch: true
  };