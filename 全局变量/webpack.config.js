const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode:'none',
  entry:'./main.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },
  plugins:[
    new webpack.DefinePlugin({
      VERSION:"'hello'"   // webpack 会直接将变量进行替换，所以如果是字符串需要将两个引号进行说明
    })
  ]
}
