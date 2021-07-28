
// merge 用于合并基本配置webpack.config
const { merge } = require('webpack-merge')
// webpack
const webpack = require('webpack')
// 基本配置webpack.config
const webpackConfig = require('./webpack.config')
// 用于提取css到文件中
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// css压缩
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');
//每次打包之前先清空build
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = merge(webpackConfig, {
    // 模式
    mode: 'production',
    // 增强调试过程。不同的值会明显影响到构建(build)和重新构建(rebuild)的速度。
    devtool: 'cheap-module-source-map',
    // css压缩
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: 'chunk-vendors',
                    test: /[\\\/]node_modules[\\\/]/,
                    priority: -10,
                    chunks: 'initial'
                },
                common: {
                    name: 'chunk-common',
                    minChunks: 2,
                    priority: -20,
                    chunks: 'initial',
                    reuseExistingChunk: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(scss|sass)$/,
                // 用于提取css到文件中
                use: [
                    {
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
            },
        ]
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
            sourceMap: true,
            cssnanoOptions: {
                preset: [
                    'default',
                    {
                        mergeLonghand: false,//不合并长类名
                        cssDeclarationSorter: false
                    }
                ]
            }
        }),
        new CleanWebpackPlugin()
    ]
})

