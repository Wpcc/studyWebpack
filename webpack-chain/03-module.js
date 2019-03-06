const Config = require('webpack-chain')
const config = new Config()

config.module
 .rule('lint')
  .test(/\.js$/)
  .pre()
  .include
    .add('src')
    .end()
  .use('eslint')
    .loader('eslint-loader')
    .options({
      rules:{
        semi:'off'
      }
    })



console.log(config.toString());
