const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './src/static', to: '.' },
      ],
    }),
  ],
};
