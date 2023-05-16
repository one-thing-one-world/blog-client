/* eslint-disable no-continue */
/* eslint-disable no-undef */
const { whenProd } = require('@craco/craco')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const path = require('path')

const resolve = dir => path.resolve(__dirname, dir)
// console.log('hello')
module.exports = {
  webpack: {
    alias: {
      '~': resolve('src'),
      components: resolve('src/components'),
    },

    configure: (webpackConfig, { env, paths }) => {
      // 更改webpack，资源文件夹位置变更 static -> web
      webpackConfig.output = {
        ...webpackConfig.output,
        ...{
          assetModuleFilename: 'blog/assets/[name].[hash][ext]',
          filename: whenProd(
            () => 'blog/js/[name].[contenthash:8].chunk.js',
            'blog/js/[name].chunk.js'
          ),
          chunkFilename: whenProd(
            () => 'blog/js/[name].[contenthash:8].chunk.js',
            'blog/js/[name].chunk.js'
          ),
        },
      }

      webpackConfig.plugins = webpackConfig.plugins.map(plugin => {
        whenProd(() => {
          if (plugin instanceof MiniCssExtractPlugin) {
            Object.assign(plugin.options, {
              filename: 'blog/css/[name].[contenthash:8].css',
              chunkFilename: 'blog/css/[name].[contenthash:8].chunk.css',
            })
          }
        })
        return plugin
      })
      // console.log(rule.oneOf,'oneOf')
      webpackConfig.module.rules = webpackConfig.module.rules.map(rule => {
        // console.log(rule, 'ruleout')
        if (rule.oneOf) {
          rule.oneOf = rule.oneOf.map(
            (oneOfRule, index) =>
              // console.log(oneOfRule, 'oneOfRule1', index)

              // if (oneOfRule.use) {
              //   oneOfRule.use[1].options.name = 'statics/media/[name].[hash].[ext]'
              // }
              oneOfRule
          )
        }
        return rule
      })
      // iterator
      // foreach
      // map pure filter reduce

      for (const rule of webpackConfig.module.rules) {
        if (!rule.oneOf) {
          continue
        }

        rule.oneOf[2].use[1].options.name = 'blog/assets/[name].[hash].[ext]'
      }

      // const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
      //   ({ constructor }) =>
      //     constructor && constructor.name === 'ModuleScopePlugin'
      // )

      // webpackConfig.resolve.plugins.splice(scopePluginIndex, 1)
      // webpackConfig.resolve = {
      //   fallback: {
      //     path: require.resolve('path-browserify'),
      //     // crypto: require.resolve('crypto-browserify'),
      //     // stream: require.resolve('stream-browserify'),
      //   },
      // }
      console.log(
        webpackConfig.resolve.fallback,
        ' webpackConfig.resolve.fallback'
      )
      // webpackConfig.resolve.fallback.path =
      //   webpackConfig.resolve.fallback.path ??
      //   require.resolve('path-browserify')

      return webpackConfig
    },
  },

  style: {
    postcss: {
      loaderOptions: () => {
        const obj = {
          postcssOptions: {
            ident: 'postcss',
          },
        }
        return obj
      },
    },
  },
}
