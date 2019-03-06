const Config = require('webpack-chain')
const config = new Config()

const path = require('path')
function resolve(dir){
  return path.resolve(__dirname,dir)
}

//更改原来的svg配置处理loader

config.module
  .rule('svg-sprite-loader')
    .test(/\.svg$/)
    .include
      .add(resolve('src/icons'))
      .end()
    .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId:'icon-[name]'
      })


console.log(config.toString());
