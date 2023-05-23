const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './dist/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    // HtmlWebpackPlugin configuration
    new HtmlWebpackPlugin({
      template: './login.html', // Path to the HTML template file
      inject: 'body', // Inject the bundled script to the body of the HTML file
      filename: 'dist/index.html' // Output path and file name for the generated HTML file
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'index.js'), // Directory to serve static files from
    },
    compress: true, // Enable gzip compression
    port: 9000, // Port number for the development server
  },
};
