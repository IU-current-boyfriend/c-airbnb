const path = require('path');
// CracoLessPlugin的插件：识别less文件
// craco目的是为了配置webpack，因为通过cli创建的react项目将webpack配置隐藏起来
const CracoLessPlugin = require('craco-less');

const resolve = dir => path.resolve(__dirname, dir);


module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          }
        }
      }
    }
  ],
  webpack: {
    alias: {
      '@': resolve('src'),
      'components': resolve('components'),
    }
  }
}