/**
 * require(path <- 파일 상대경로)
 * JS 파일을 실행시키고 결과물을 모듈로 취급해서 가져옴
 */
// const app = require('./web2.nodejs/dynamicmain')

console.log(1, new Date())
console.log(2, new Date)

const add = (a,b)=>a+b
const multiple = (...arr) => arr.reduce((a, b) => {
  console.log('M-', a, b)
  return a * b
}, 1)

console.log(add(10, 25))
console.log(multiple(2, 7, 10, 5, 3))

require('./web2.nodejs/list-outputmain')
// console.log('Root: Main.js')