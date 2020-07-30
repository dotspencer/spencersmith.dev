const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/docs',
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    symlinks: false,
    modules: [
      __dirname + '/src',
      'node_modules',
    ],
  },
  // devServer: {
  //   publicPath: '/',
  // },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './public', to: '.' },
      ],
    }),
  ],
};
