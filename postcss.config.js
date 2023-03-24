// https://github.com/youncccat/postcss-relaxed-unit
const RelaxedUnit = require('postcss-relaxed-unit')

module.exports = {
  plugins: [
    RelaxedUnit({
      rules: {
        rw: 'div(375).mul(100).unit(vw)',
        rh: 'div(667).mul(100).unit(vh)',
      },
    }),
  ],
}
