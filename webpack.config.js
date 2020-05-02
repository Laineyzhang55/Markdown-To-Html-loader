const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './src/index.js',

  plugins:[
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Output Management',
      template: './src/index.html'
    }),
  ],

  resolveLoader: {
    modules: [
    'node_modules',
    path.resolve(__dirname, 'loaders')
    ]
  },

  module:{
    rules:[
      {
        test: /\.md$/,
        use:[
          {loader: 'html-loader'}, 
          {loader: 'conver-loader',
          options: {title: 'hello'}
        }]
      },
    ]
  },

  devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist',
   },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};