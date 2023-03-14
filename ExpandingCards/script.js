const panels = document.querySelectorAll('.panel')

//Different ways to write forEach which is a Higher Order Array Method
//panels.forEach(function (panel) { })
//or use the more commonly used arrow function as follows
//panels.forEach((pass in here whatever you want to use in each iteration) => {})
panels.forEach((panel) => {
  //have an even listener on each of these panels and when we click on it something happens
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}
