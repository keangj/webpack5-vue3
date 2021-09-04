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
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
}