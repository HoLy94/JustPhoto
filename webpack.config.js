var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
  filename: 'css/main.css'
});

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ]
      },
      {
        test: /\.sass$/,
        use: extractPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    extractPlugin
  ]
}
