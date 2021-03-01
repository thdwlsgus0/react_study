const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool:'eval',
  resolve:{
    extensions:['.jsx', '.js'],
  },
  entry:{
     app:'./client',
  },
  module:{
     rules:[{
       test:/\.jsx?$/,
       loader:'babel-loader',
       options:{
         presets:[['@babel/preset-env', {
           targets:{
             browsers: ['> 0.25% in KR'],
           },
           debug:true
         }], 
         '@babel/preset-react',
        ],
         plugins:[],
       }
     }]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({debug: true}),
    new webpack.BannerPlugin({
      banner: '배너내용입니다.'
    }),
    new CleanWebpackPlugin()
  ],
  output:{
     filename:'app.js',
     path: path.join(__dirname, 'abc', '/app', 'dist'),
  }
}