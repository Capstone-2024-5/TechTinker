const { resolve } = require('path');
const DotenvWebpackPlugin = require('dotenv-webpack');

module.exports = {
   mode: 'development',
   entry: { app: './src/App.jsx' },
   output: {
      filename: '[name].bundle.js/main.js',
      path: resolve(__dirname, 'public'),
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: 'babel-loader',
         },
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|jpe?g|gif|svg|jpg)$/i,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     name: '[name].[ext]',
                     outputPath: 'images/', // Specify the output directory for the processed images
                  },
               },
            ],
          },
      ],
   },
   optimization: {
      splitChunks: {
         name: 'vendor',
         chunks: 'all',
      },
   },
   resolve: {
      fallback: {
         "path": false,
         "fs": false,
         "os": false,
         "crypto": false,
      },
   },
   plugins: [
      new DotenvWebpackPlugin(),
   ],

   
};