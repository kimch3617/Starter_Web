// const world = function hello() {
//     console.log("Hello~")
// }

// world()

// function hello() {
//     return 'Hello~'
// }
// console.log(hello())

// const user = {
//     name: "kimch",
//     age: 21
// }

// const user2 = {
//     name: "kimch2"
// }

// function getName({ name }) {
//     return name
// }

// function getAge({ age = 'not exist' }) {
//     return age
// }

// console.log(getName(user2))
// console.log(getAge(user2))

// function sum(...rest) {
//     console.log(rest)
//     return arguments.reduce(function (acc, cur) {
//         return acc + cur
//     }, 0)
// }

// console.log(sum(1, 2)) // 3
// console.log(sum(1, 2, 3, 4)) // 10
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)) // 55

// cosnt sum = function() {}
// const sum = () => {}

// const sum = (a, b) => a + b
// console.log(sum(1, 2))

// const g = () => ({ a: 1 })
// const h = () => [1, 2, 3]
// console.log(g())

// const a = 6
// ;(() => { console.log(a * 2)})()

// const sum = (a, b, c) => {
//     setTimeout(() => { 
//         c(a + b)
//     }, 1000)
// }

// sum(1, 2, (value) => { console.log(value) })

// const loadImage = (url, cb) => {
//     const imgEl = document.createElement('img')
//     imgEl.src = url
//     imgEl.addEventListener('load', () => {
//         setTimeout(() => {
//             cb(imgEl)
//         }, 1000)
//     })
// }

// const containerEl = document.querySelector('.container')
// loadImage(
//     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz5JQWrFmc7emFhAXlVIKsjZmTaromlosdyA&s',
//     (imgEl) => {
//         containerEl.innerHTML = ''
//         containerEl.append(imgEl)
//     }
// )

// const hello = () => {
//     console.log('Hello~')
// }

// const timeout = setInterval(hello, 2000)
// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {
//     console.log('Clear~')
//     clearTimeout(timeout)
// })

// function user() {
//     this.firstName = 'Neo'
//     this.lastName = 'Anderson'

//     return {
//         firstName: 'Hee',
//         lastName: 'Kim',
//         getFullName: function () { return `${this.firstName}, ${this.lastName}` }
//     }
// }

// const lewis = {
//     firstName: 'Lewis',
//     lastName: 'Yang'
// }

// const u = user()
// console.log(u.getFullName())
// console.log(u.getFullName.call(lewis))

const timer = {
    title: 'TIMER!',
    timeout() {
        console.log(this.title)
        setTimeout(() => {
            console.log(this.title)
        }, 1000)
    }
}

timer.timeout()