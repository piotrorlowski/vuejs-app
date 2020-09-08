const path = require('path');

module.exports = {
  configureWebpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve('src'),
    };
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
};
