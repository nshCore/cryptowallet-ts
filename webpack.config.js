const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'cryptowallet-js.js',
    library: 'cryptowallet-js',
    libraryTarget: 'umd',
  },
  resolve: {
    alias: {
      lodash: path.resolve(__dirname, 'node_modules/lodash'),
      'bn.js': path.resolve(__dirname, 'node_modules/bn.js'),
    },
  },
  node: {
    process: true,
    Buffer: false,
  },
  plugins: [
    new Dotenv(),
  ],
};
