module.exports = {
  // webpack: {
  //   alias: {
  //     '@': resolve('src'),
  //     components: resolve('src/components'),
  //   },
  // },

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
