const chalk = require('chalk')
// merge 用于合并基本配置webpack.config
const {
  merge
} = require('webpack-merge')
// webpack
const webpack = require('webpack')
// 基本配置webpack.config
const webpackConfig = require('./webpack.config')
// 用于提取css到文件中
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// css压缩
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');
//查看打包体积
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//每次打包之前先清空build
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')

console.log(chalk.bgGreen(`当前环境:${'prod'} `));
module.exports = merge(webpackConfig, {
  // 模式
  mode: 'production',
  // 增强调试过程。不同的值会明显影响到构建(build)和重新构建(rebuild)的速度。
  devtool: 'cheap-module-source-map',
  optimization: {
    // 代码分割
    splitChunks: {
      //initial 所有类型  async异步的类型
      chunks: 'initial', // 2. 处理的 chunk 类型
      minSize: 20000, // 4. 允许新拆出 chunk 的最小体积
      minRemainingSize: 0,
      minChunks: 1, // 5. 拆分前被 chunk 公用的最小次数
      maxAsyncRequests: 30, // 7. 每个异步加载模块最多能被拆分的数量
      maxInitialRequests: 30, // 6. 每个入口和它的同步依赖最多能被拆分的数量
      enforceSizeThreshold: 50000, // 8. 强制执行拆分的体积阈值并忽略其他限制
      cacheGroups: { // 1. 缓存组
        vant: { // 1. 正则匹配示例，把 react 和 react-dom 分到一个名为 `lib-react` 的 js 中
          // `[\\/]` 是作为跨平台兼容性的路径分隔符
          test: /[\\/]node_modules[\\/](vant)[\\/]/, //分割vantui库为单独js文件
          name: 'lib-vant',
        },
        vue: {
          test: /[\\/]node_modules[\\/](vue)[\\/]/, // 1.1 模块路径/文件名匹配正则
          name: 'lib-vue',
        },
        default: {
          minChunks: 2, // 5. default 组的模块必须至少被 2 个 chunk 共用 (本次分割前) 
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    }
  },
  module: {
    rules: [{
      test: /\.(scss|sass|css)$/,
      // 用于提取css到文件中
      use: [{
          loader: MiniCssExtractPlugin.loader
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 2
            // 将importLoaders设置为1，那么a.scss和b.scss会被postcss-loader给处理
            // 将importLoaders设置为2，那么 a.scss和b.scss就会被postcss-loader和sass-loader给处理
            // PostCSS的功能是自动增加加css前缀 这个项目我没配
          }
        },
        {
          loader: 'sass-loader',
          options: {
            implementation: require('dart-sass')
          }
        }
      ]
    }, ]
  },
  plugins: [
    // 定义环境变量 用于项目内全局访问
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    // 用于提取css到文件中
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    //css压缩
    new OptimizeCssnanoPlugin({
      // 取消css的map文件
      sourceMap: false,
      cssnanoOptions: {
        preset: [
          'default',
          {
            mergeLonghand: false, //不合并长类名
            cssDeclarationSorter: false
          }
        ]
      }
    }),
    new CleanWebpackPlugin(),
    new BundleAnalyzerPlugin()

  ]
})
