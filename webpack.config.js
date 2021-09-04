const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/')
    },
    extensions: [".json", ".ts", ".js", "..."]
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
}