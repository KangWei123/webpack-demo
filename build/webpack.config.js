// build/webpack.config.js

// path 路径对象 提供resolve()方法，用于匹配路径
const path = require('path')
// webpack 打包工具
const webpack = require('webpack')
// HtmlWebpackPulgin 匹配html入口文件
const HtmlWebpackPlugin = require('html-webpack-plugin')
//识别vue文件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
module.exports = {
    entry: {
        // 配置入口文件
        main: path.resolve(__dirname, '../src/main.js')
    },
    output: {
        // 目标输出目录 path 的绝对路径
        path: path.resolve(__dirname, '../dist'),
        // 输出文件的文件名
        filename: 'js/[name].[hash:8].js',
        // 生成的 chunk 名称
        chunkFilename: 'js/[name].[hash:8].js',
    },
    devServer: {
        //热更新
        hot: true,
        // 端口号
        port: 3000,
        //内容位置
        contentBase: './dist',
        compress: true // gzip
    },
    // 配置模块 解析路径
    resolve: {
        // 别名 项目绝对路径
        alias: {
            '@': path.resolve(__dirname, '../src')
        },
        // 自动解析确定的扩展 引入文件可不带.js .vue后缀名
        extensions: [
            '.js',
            '.vue'
        ]
    },
    module: {
        // webpack默认情况下只认识.js结尾的文件，要打包其它类型的文件，
        // 则我们需要在webpack.config.js文件中进行配置，
        // 只有通过正确的配置后，当webpack进行打包时才能对其它类型的文件进行正确的打包
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'cache-loader'
                    },
                    {
                        loader: 'vue-loader',
                        options: {
                            compilerOptions: {
                                preserveWhitespace: false
                            },
                        }
                    }
                ]
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            // file-loader可用于图片资源的打包配置

            // url-loader的作用跟file-loader差不多，但它比file-loader更强大，
            //它不止能实现file-loader的打包功能，它还比file-loader多一个limit配置项，这个limit配置就是配置图片资源的大小的，即当我们的图片资源大于这个限定值时，则打包后的图片资源放入单独的文件夹进行存放，
            // 如果打包后的图片资源小于这个限定值，则直接将该图片资源放入出口js文件中
            {
                test: /\.(png|svg|jpeg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'img/[name].[hash:8].[ext]',
                                    esModule: false
                                },
                            }
                        },
                    }
                ]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'media/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
            // 字体 loader
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    name: 'fonts/[name].[hash:8].[ext]'
                                }
                            }
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        //配合vue-loader 识别.vue文件 进行对应打包
        new VueLoaderPlugin(),
        //指定入口文件
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html')
        }),
        // 配合热更新
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                notes: ['蛙人你好，系统正运行在http://localhost:3000']
            },
            clearConsole: true,
        })
    ]
}
