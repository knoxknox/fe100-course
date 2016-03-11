module.exports = {
  entry: './app/index.js',
  output: { path: './build', filename: 'bundle.js' },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel',
        exclude: /(node_modules|bower_components)/ }
    ]
  }
};
