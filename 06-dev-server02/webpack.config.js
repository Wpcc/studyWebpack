const path = require('path')
const resolve = function(filename){
  return path.resolve(__dirname,filename)
}

const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode:'none',
  devServer:{
    contentBase:resolve('./dist'),
  },
  entry:resolve('./main.js'),
  output:{
    filename:'[name].js'
  },
  module:{
    rules:[
      {test:/\.css$/, use:[{loader:'style-loader'},{loader:'css-loader'}]}
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
      template:resolve('./index.html')
    })
  ]
}
