// console.log(1)
// setTimeout(() => {
//     console.log(2)    
// }, 1000)
// console.log(3)

const a = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(1)
            resolve()``
        }, 1000)
    })
}

const b = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(2)
            resolve()
        }, 1000)
    })
}

const c = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(3)
            resolve()
        }, 1000)
    })
}

const d = () => console.log(4)

const wrap = async () => {
    await a()
    await b()
    await c()
    d()
}

wrap()

const res = await fetch(url); // 요청을 기다림
const data = await res.json(); // 응답을 JSON으로 파싱
console.log(data);