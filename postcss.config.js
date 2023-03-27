// https://github.com/youncccat/postcss-relaxed-unit
const RelaxedUnit = require('postcss-relaxed-unit')

console.log('RelaxedUnit')
module.exports = {
  plugins: [
    RelaxedUnit({
      rules: {
        rw: 'div(1920).mul(100).unit(vw)',
        rh: 'div(1080).mul(100).unit(vh)',
      },
    }),
  ],
}
