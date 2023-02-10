import { defineConfig } from 'umi';


export default defineConfig({
  mode: 'site',
  outputPath: 'doc-site', // 输出文件夹
  //base参数，部署到非根目录时才需配置,我的理解就是现在base里面的文件就是相对于现在的网页而言实际上的根目录，文件都从这里开始请求
  base: './',
  history: { type: 'hash' },
  // publicPath，打包的时候会在静态文件前面加上public的值。
  publicPath: './',

  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  dynamicImport: {}, // 拆包 站点过大时可以优化首屏加载速度
});
