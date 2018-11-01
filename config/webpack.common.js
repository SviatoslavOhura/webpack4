const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const dirs = require('./dirs');

module.exports = {
  entry: path.join(dirs.src, "index.js"),
  output: {
    path: dirs.dist,
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      { test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /(\.js|\.jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          }
        }
      },
      { test: /\.(woff(2)?|ttf|eot|png|jpg|svg)(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader' },
    ]
  },
  resolve: {
    alias: {
      components: path.join(dirs.src, '/components'),
      styles: path.join(dirs.assets, '/scss'),
      images: path.join(dirs.assets, '/images'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(dirs.src, 'index.html'),
      title: 'My Webpack app',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
  ],
}
