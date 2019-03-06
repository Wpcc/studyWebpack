// 封装路径函数
const path = require('path')
const resolve = function(dirname){
  return path.resolve(__dirname, dirname)
}
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'none',
  entry: resolve('./main.js'),
  output: {
    filename: 'bundle.js',
    path: resolve('./dist/src')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader',options: {modules:true}}
      ]}
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: resolve('./index.html'),
      filename: resolve('./dist/index.html') //如果不设置路径，默认路径以output路径为主
    })
  ]
}
