const path = require('path');

module.exports = {
  entry: './src/filemanager.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'filemanager.js',
    library: {
      type: 'module'
    },
    globalObject: 'this',
  },
  experiments: {  
    outputModule: true
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  mode: 'production',
};