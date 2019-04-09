const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const createVueLoaderOptions = require('./vue-loader.config')
const isDev = process.env.NODE_ENV === 'development'

const config = {
    mode: process.env.NODE_ENV || 'production',
    target: 'web',
    entry: path.join(__dirname, '../client/index.js'),
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.join(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options:createVueLoaderOptions(isDev)
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: __dirname + 'node_modules',
                include: __dirname + 'src',
                options:{
                    presets:['env']
                }
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: 'resources/[path][name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(vue|js)$/,
                enforce: 'pre',
                exclude: /node_modules/,
                include: [path.resolve('client'), path.resolve('practice')],
                use:[{
                    loader:'eslint-loader',
                    options: {
                        formatter: require('eslint-friendly-formatter')
                    }
                }
                ]
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}


module.exports = config
