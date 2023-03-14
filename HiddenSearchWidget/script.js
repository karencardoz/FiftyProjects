const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
  // toggle a class
  search.classList.toggle('active')
  // set focus on input
  input.focus()
})
