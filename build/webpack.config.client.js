const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.config.base')

const isDev = process.env.NODE_ENV === 'development'

const devServer = {
    port: 8000,
    host: '0.0.0.0',
    overlay: {
      errors: true,
    },
    hot: true
  }

  const defaultPlugin = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new HTMLPlugin()
  ]
    

let config 

if (isDev) {
  config = merge(baseConfig,{
      devServer,
      plugins:defaultPlugin.concat([
        new webpack.HotModuleReplacementPlugin()
      ]),
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
  
} else {
  config = merge(baseConfig,{
     entry: {
        app: path.join(__dirname, '../client/index.js'),
     },
     output:{
         filename:'[name].[chunkhash:8].js'
     },
     module:{
            rules:[{
              test: /\.styl/,
              oneOf: [
                {
                  resourceQuery: /module/,
                  use:[
                    MiniCssExtractPlugin.loader,
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
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'stylus-loader'
                  ]
                }
              ]
            }]
          },
      optimization: {
        splitChunks:{
          chunks: 'all'
        },
        runtimeChunk: true
      },
    plugins:defaultPlugin.concat([
      new MiniCssExtractPlugin({
        filename:'[name].[chunkhash:8].css',
        //chunkFilename: '[id].css'
      })
      // new webpack.optimize.CommonsChunkPlugin({
      // name: 'vendor'
      // }),
      // new webpack.optimize.CommonsChunkPlugin({
      // name: 'runtime'
      // })
  ])
  })
}


module.exports = config
