// const string1 = "Hello"
// const string2 = 'Hello'
// const string3 = `Hello ${string1} ?!`
// const number1 = 0.1
// const number2 = 0.2

// console.log(string3)
// console.log(Number((number1 + number2).toFixed(1)))

// console.log([].constructor === Array)
// console.log({}.constructor === Object)

// console.log(Object.prototype.toString.call(null).slice(8, -1) === 'Null')
// console.log("s" && NaN)

// const n = 0
// const num1 = n || 7
// console.log(num1)

// const num2 = n ?? 7
// console.log(num2)
// console.log(null ?? 1)

// const a = [1, 2, 3]
// const b = [4, 5, 6]
// console.log(typeof [...a, ...b])

// function fn(x, y, z) {
//     console.log(x, y, z)
// }

// const f = [1, 2, 3, 4]
// fn(...f)

// const arr = [1, 2, 3]
// const [a, ...rest] = arr
// console.log(a, rest)

// const obj = { a: 1, b: 2, c: 3 }
// const {a, b, d: ten = 10} = obj
// console.log(a, b, ten)
// const {c, ...rest} = obj
// console.log(c, rest)

// const user = null
// console.log(user?.name)

// const userA = {
//     name: 'Kimch',
//     age: 23
// }

// const userB = {
//     name: 'Neo'
// }

// function getAge(user) {
//     return user?.age ?? '나이 없음'
// }

// console.log(getAge(userA))
// console.log(getAge(userB))

// const fruits = ['Apple', 'Banana', 'Cherry']
// for (const fruit of fruits) {
//     console.log(fruit)
// }

// import * as abc from './module.js'
// console.log(abc)

setTimeout(async() => {
    // import('./module.js').then(abc => {
    //     console.log(abc)
    // })

    const abc = await import('./module.js')
    console.log(abc)
}, 1000)