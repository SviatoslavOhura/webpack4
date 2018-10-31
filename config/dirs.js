const path = require('path');

const root = path.resolve(__dirname, '../');
const src = path.resolve(root, './src');
const dist = path.resolve(root, './dist');
const assets = path.resolve(root, './src/assets');

module.exports = {
  root,
  src,
  dist,
  assets,
};
