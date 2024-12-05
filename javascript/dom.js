// const el = document.getElementById('child2')
// console.log(el)

const nodeList = document.querySelectorAll('.child')
console.log(nodeList)
nodeList.forEach(el => console.log(el.textContent))