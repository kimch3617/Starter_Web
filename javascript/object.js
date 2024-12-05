// const fruits = new Array('Apple', 'Banana', 'Cherryy')
// console.log(fruits)
// console.log(fruits.includes('Banana'))

// Array.prototype.heropy = function () {
//     console.log(this)
// }

// fruits.heropy()

// const heropy = {
//     firstName: 'Heropy',
//     lastName: 'Park',
//     getFullName() { return `${this.firstName}, ${this.lastName}` }
// }

// const neo = {
//     firstName: 'Neo',
//     lastName: 'Anderson'
// }

// console.log(heropy.getFullName())
// console.log(heropy.getFullName.call(neo))

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName}, ${this.lastName}`;
    }
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(' ')
    }
    static isUser() {
        return true
    }
}

const heropy = new User('Heropy', 'Park')
const neo = new User('Neo', 'Anderson')

console.log(heropy.fullName)
console.log(neo.fullName)