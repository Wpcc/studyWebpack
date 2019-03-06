const path = require('path')
const resolve = function(filename){
  return path.resolve(__dirname, filename)
}

module.exports = {
  mode:'none',
  devServer:{
    contentBase:resolve('./assets')
  },
  entry:resolve('./main.js'),
  output:{
    filename:'bundle.js',
    path:resolve('./dist')
  },
  module:{
    rules:[
      {test:/\.css$/, use:[{loader:'style-loader'},{loader:'css-loader'}]}
    ]
  }
}
