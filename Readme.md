# A webpack loader based on showdown to transform markdown file to html file

## Installation

```bash
npm install
```
**npm**
```
npm install --save Markdown-To-Html-loader
```

## usage
```
module.exports = {
  mode: 'development',
  entry: './src/index.js',

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
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

**Updating**
