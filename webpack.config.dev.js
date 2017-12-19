import path from 'path';
import webpack from 'webpack';


export default {
  devtool: 'eval-source-map',
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    path: path.resolve(__dirname, '/dist'),
    filename: 'bundle.js'
    },
  module:{
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'client'),
        loaders: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
}
