const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@screens': path.resolve(__dirname, './src/screens'),
      '@components/*': path.resolve(__dirname, './src/components/*'),
      '@components': path.resolve(__dirname, './src/components'),

      '@ui-kit': path.resolve(__dirname, './src/ui-kit'),
      '@ui-kit/*': path.resolve(__dirname, './src/ui-kit/*'),

      '@constants': path.resolve(__dirname, './src/constants'),

    },
  },
};