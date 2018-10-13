const path = require('path');

const clientDIR = path.join(__dirname, '/client');
const publicDIR = path.join(__dirname, '/public');

module.exports = {
  entry: `${clientDIR}/App.jsx`,
  output: {
    filename: 'bundle.js',
    path: publicDIR,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/, /\.js$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          camelCase: 'dashes',
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
    ],
  },
};
