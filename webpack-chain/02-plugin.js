const Config = require('webpack-chain')
const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

const config = new Config()

function resolve(filename){
  return path.resolve(__dirname, filename)
}

config
  .plugin('html')
  .use(HTMLPlugin,[
    {template: resolve('./index.html'),
    filename: resolve('./dist/index.html')}
  ])

console.log(config.toString())
