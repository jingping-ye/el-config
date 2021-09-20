const path = require('path')

const vueConfig = {
  pages: {
    examples: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Examples',
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve('examples'))
      .set('~', path.resolve('packages'))
    config.module
      .rule('js')
      .include.add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
  },
}
module.exports = vueConfig
