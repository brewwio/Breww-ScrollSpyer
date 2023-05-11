const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = merge(commonConfig, {
  mode: 'production',
  output: {
    filename: '[name].esm.js',
    library: {
      type: 'module',
    },
  },
  optimization: {
    minimize: false,
  },
  resolve: {
    fallback: {
      // Polyfill required Node.js modules for the ES module bundle
      fs: false,
      path: false,
    },
  },
});
