const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + 'dist',
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
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
