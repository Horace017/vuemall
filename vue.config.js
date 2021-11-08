module.exports={
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'components':'@/components',
        'common':'@/common',
        'network':'@/network',
        'router':'@/router',
        'views':'@/views',
        'img':'@/assets/img',
      }
    }
  },
  publicPath: './', // 公共路径(必须有的)
  outputDir: "dist", // 输出文件目录
  assetsDir: "static"//静态资源文件名称

}