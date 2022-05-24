// eslint-disable-next-line import/no-extraneous-dependencies
const RelaxedUnit = require('postcss-relaxed-unit')

module.exports = {
  plugins: [
    RelaxedUnit({
      rules: {
        rw: 'div(1020).mul(100).unit(vw)',
        rh: 'div(1080).mul(100).unit(vh)',
      },
    }),
  ],
}
