const Config = require('webpack-chain')
const config = new Config()

/*
这个配置项：应该是先用file-loader处理css，再用url-loader处理css
故多个配置，应该是直接写开即可
*/
config.module
  .rule('css')
    .oneOf('inline')
      .resourceQuery(/inline/)
      .use('url')
        .loader('url-loader')
        .end()
      .end()
    .oneOf('external')
      .resourceQuery(/external/)
      .use('file')
        .loader('file-loader')

console.log(config.toString());
