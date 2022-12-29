const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  resolve: {
    alias: {
      globalStyles: path.resolve(__dirname, './src/globalStyles'),
      pages: path.resolve(__dirname, './src/pages'),
      components: path.resolve(__dirname, './src/components'),
      constants: path.resolve(__dirname, './src/constants'),
      assets: path.resolve(__dirname, './src/assets'),
      hooks: path.resolve(__dirname, './src/hooks'),
      helpers: path.resolve(__dirname, './src/helpers'),
      appTypes: path.resolve(__dirname, './src/appTypes'),
      config: path.resolve(__dirname, './src/config'),
      validation: path.resolve(__dirname, './src/validation'),
    },
    extensions: ['.tsx', '.ts', '.js', '.json', '.d.ts'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
  },
  mode: 'development',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      favicon: path.resolve(__dirname, './public/favicon.png'),
    }),
    new Dotenv(),
    new ESLintPlugin({ extensions: ['js', 'jsx', 'ts', 'tsx'] }),
  ],
};
