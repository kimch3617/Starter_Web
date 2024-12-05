// import cloneDeep from 'lodash/cloneDeep'

// const a = { x: { y: 1} }
// const b = cloneDeep(a)

// b.x.y = 2
// console.log(b)
// console.log(a)

console.log("Start!")
setTimeout(() => {
    console.log("Timeout!")
}, 0);
Promise.resolve("Promise!").then(res => console.log(res))
console.log("End!")