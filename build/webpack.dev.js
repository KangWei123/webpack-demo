// build/webpack.dev.js

// merge 用于合并基本配置webpack.config
const { merge } = require('webpack-merge')
// 基本配置webpack.config
const webpackConfig = require('./webpack.config')
// webpack 打包工具
const webpack = require('webpack')
module.exports = merge(webpackConfig, {
    // 模式
    mode: 'development',
    // 增强调试过程。不同的值会明显影响到构建(build)和重新构建(rebuild)的速度。
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(scss|sass)$/,
                use: [
                    // 我们需要打包的css文件在经过sass-loader的翻译，css-loader的合并之后，
                    // style-loader的作用就是把合并后的css文件挂载到页面的head中来渲染出页面的样式
                    {
                        loader: 'style-loader'
                    },
                    //   我们的css打包文件中可能会引入其它的css文件，而css-loader的作用就相当于把这些相互依赖的css文件合并成一个css文件。
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                            // 将importLoaders设置为1，那么a.scss和b.scss会被postcss-loader给处理
                            // 将importLoaders设置为2，那么 a.scss和b.scss就会被postcss-loader和sass-loader给处理
                        }
                    },
                    // 当我们打包sass语法编写的css文件时，sass-loader的作用就是将该css文件翻译成纯css语法文件，以便后续打包处理，
                    // 需要注意的是，在我们需要使用sass-loader时，在安装sass-loader时还需要安装node-sass。
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('dart-sass')
                        }
                    }
                ]
            },
        ]
    },
    // 定义环境变量 用于项目内全局访问
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        }),
    ]
})