const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')


const devServer = {
    port: 8080,
    host: '0.0.0.0',
    overlay: {
        errors: true,
    },
    hot: true
}

const defaultPlugin = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV:  '"development"'
        }
    }),
    new HTMLPlugin({
        template:path.join(__dirname,'template.html')
    })
]


let config

config = merge(baseConfig,{
    entry:path.join(__dirname,'../practice/index.js'),
    devServer,
    plugins:defaultPlugin.concat([
        new webpack.HotModuleReplacementPlugin()
    ]),
    resolve:{
        alias:{
            'vue': path.join(__dirname,'../node_modules/vue/dist/vue.esm')
        }
    },
    module:{
        rules:[{
            test: /\.styl/,
            oneOf: [
                {
                    resourceQuery: /module/,
                    use:[
                        'vue-style-loader',
                        {
                            loader:'css-loader',
                            options:{
                                modules:true,
                                localIndentName: '[local]_[hash:base64:8]',
                                camelCase:true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                            }
                        },
                        'stylus-loader'
                    ]
                }
                ,{
                    use:[
                        'vue-style-loader',
                        'css-loader',
                        'stylus-loader'
                    ]
                }
            ]
        }]
    }
})

module.exports = config
