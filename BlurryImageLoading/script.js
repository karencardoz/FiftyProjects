// work on percentage(%) change from 0-100
// image change from blurry to clear as it loads

const loadPercent = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
let done = false

let load = 0
// The setInterval() method calls a function at specified intervals (in milliseconds),
// Until clearInterval() is called, or the window is closed.
// let interval = setInterval(blurring, 30)
//Another way to do this is using the requestAnimationFrame to improve FPS
//https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
let globalID = requestAnimationFrame(blurring)

//we want this function to run in intervals of evert 30ms
function blurring() {
  load++
  // if (load > 99) {
  //   //stop calling the blurring()
  //   clearInterval(interval)
  // }
  if (load > 100) {
    //cancels an animation
    return
  }
  if (!done) {
    //display load%
    loadPercent.innerText = `${load}%`
    // can't be the load value because opacity goes from 0 to 1
    // number of times it needs to happen, from 0-100, we want to map opacity from 1 to 0
    //if we were starting invisible to opaque then it would be 0 to 1
    loadPercent.style.opacity = scale(load, 0, 100, 1, 0)
    //  now we have to do the same thing for the blur
    //  In this project, I need to use 30 pixels for max blur
    // template literal = `` and variable or expression syntax
    // number of times it needs to happen(0-100), we want to map blue from 30 to 0 px
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    requestAnimationFrame(blurring)
  }
}

// In our case `opacity` ranges from 0 to 1 and blur from 0px to 30 px, however, load ranges from 0 to 100
// Hence, we use this  stack overflow () to map a range of numbers to another
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// number of t
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}
