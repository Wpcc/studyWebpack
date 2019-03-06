const Config = require('webpack-chain')
const config = new Config()

/*
果然，.tap是用来修改options配置对象中的参数
*/
config.module
  .rule('svg')
    .test(/\.(svg)(\?.*)?$/)
    .use('file-loader')
      .loader('file-loader')
      .options({
        name : 'hello'
      })
      .tap(args => {
        args.name = 'wpc'
        return args
      })

console.log(config.toString());
