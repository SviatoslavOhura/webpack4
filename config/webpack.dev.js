const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const dirs = require('./dirs');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(dirs.src, "index.js"),
    port: 9000
  }
});
