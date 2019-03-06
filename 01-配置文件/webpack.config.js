const path = require('path')
function resovle(filename){
  return path.resolve(__dirname, filename)
}
module.exports = {
  entry:'./main.js',
  output:{
    path:resovle('./dist'),
    filename:'bundle.js'
  }
}
