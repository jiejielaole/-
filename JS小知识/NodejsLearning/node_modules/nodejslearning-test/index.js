const _ = require('lodash')
// let arr = [4, 5, 6, 7]
function myChunk(arr) {
  let arr2 = _.chunk(arr, 2)
  // console.log(arr2)
  return arr2
}

module.exports = myChunk