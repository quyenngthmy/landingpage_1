const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
module.exports = {
  performance : {
    hints : false
  },
  devServer: {
    watchFiles: ["src/**/*"],
    port: 2000,
    hot: true,
  },
  stats: {
    children: true,
  },
  entry: {
    index: {
      import:'./src/index.js',
      filename: 'static/js/bundle.js'
    },
  },
  output: {
    clean: true,
    path: path.join(__dirname, "../production"), // Thư mục chứa file được build ra
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Sẽ sử dụng babel-loader cho những file .js
        exclude: /node_modules/, // Loại trừ thư mục node_modules
        use: ["babel-loader"]
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [
       new HtmlMinimizerPlugin(),
       new CssMinimizerPlugin(),
       new TerserWebpackPlugin({
        extractComments: false,
      }),
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jquery: "jQuery",
      "window.jQuery": "jquery"
    }),
    
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/view/index.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'basic.html',
      template: './src/view/basic.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'coat.html',
      template: './src/view/coat.html',
      inject: "body",
      chunks: ['index'],
    }),

    new HtmlWebpackPlugin({
      filename: 'office.html',
      template: './src/view/office.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'sports-golf.html',
      template: './src/view/sports-golf.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'sports-gym.html',
      template: './src/view/sports-gym.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'sports-school.html',
      template: './src/view/sports-school.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'sports-swimming.html',
      template: './src/view/sports-swimming.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'uniform-chef.html',
      template: './src/view/uniform-chef.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'uniform-hospital.html',
      template: './src/view/uniform-hospital.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'uniform-hotel.html',
      template: './src/view/uniform-hotel.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'uniform-labor.html',
      template: './src/view/uniform-labor.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'uniform-school.html',
      template: './src/view/uniform-school.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'uniform-service.html',
      template: './src/view/uniform-service.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'eco-bag.html',
      template: './src/view/eco-bag.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'gift.html',
      template: './src/view/gift.html',
      inject: "body",
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'best-sellers.html',
      template: './src/view/best-sellers.html',
      inject: "body",
      chunks: ['index'],
    }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].min.css",
    }),
    
  ],
};
