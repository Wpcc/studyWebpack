const Config = require('webpack-chain')
const config = new Config()
const path = require('path')
function resolve(filename) {
  return path.resolve(__dirname, filename)
}

config
  .entry('index1')
    .add('src/index1.js')
    .end()
  .output
    .path(resolve('dist'))
    .filename('[name].bundle.js') //需要配置打包文件才能输出[name]的值

console.log(config.toString())
