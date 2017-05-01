module.exports = {
  entry: [
    './client/src/index.js'
  ],
  output: {
    path: './build/client/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './client/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
