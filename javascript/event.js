// const parentEl = document.querySelector('.parent')
// const childEl = document.querySelector('.child')

// const handler = () => {
//     console.log('Parent!')
// }
// parentEl.addEventListener('click', handler)
// childEl.addEventListener('click', () => {
//     parentEl.removeEventListener('click', handler)
// })

// parentEl.addEventListener('click', event => {
//     console.log(event.target, event.currentTarget)
// })
// parentEl.addEventListener('wheel', event => {
//     console.log(event)
    
// })

// const parentEl = document.querySelector('.parent')
// const childEl = document.querySelector('.child')
// const anchorEl = document.querySelector('a')

// window.addEventListener('click', (event) => {
//     console.log('Window!')
// })
// document.body.addEventListener('click', (event) => {
//     console.log('Body!')
// }, { capture: true })
// parentEl.addEventListener('click', (event) => {
//     console.log('parentEl!')
// })
// childEl.addEventListener('click', (event) => {
//     console.log('childEl!')
// })
// anchorEl.addEventListener('click', (event) => {
//     console.log('anchorEl!')
// })

let increase = (function() { // (function() { ... })(); 즉시실행함수
  let counter = 0;
      
  return function(){ // 클로저
    return ++counter; 
  }
})

document.querySelector('.parent').onclick = function () {
  console.log(increase())
};

console.log(history)