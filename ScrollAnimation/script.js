const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  //we want the trigger point to be a little less than the innerHeight
  const triggerBottom = (window.innerHeight / 5) * 4
  boxes.forEach((box) => {
    // The Element.getBoundingClientRect() method returns a DOMRect object
    // providing information about the size of an element and its position relative to the viewport.
    //   A DOMRect describes the size and position of a rectangle.
    // we're using it here to find the box top
    const boxTop = box.getBoundingClientRect().top
    //now we see if the top of the box is less than the trigger bottom, if it is add the class of show
    // else remove the class of show
    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
