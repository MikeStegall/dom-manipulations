
document.querySelector('#thanks button').addEventListener('click', function () {
  // TASK #1
  alert("yowch! don't click me so hard!")
})

document.querySelector('#double button').addEventListener('click', function () {
  // TASK #2
  var double = document.querySelector('#compoundInvestment').innerHTML
  document.querySelector('#compoundInvestment').innerHTML = double * 2
})

document.querySelector('#color-circle button').addEventListener('click', function () {
  // TASK #3
  var circle = document.querySelector('#circle-bw').style.background
  if (circle === 'black') {
    document.querySelector('#circle-bw').style.background = 'white'
  } else {
    document.querySelector('#circle-bw').style.background = 'black'
  }
})

document.querySelector('#blow-up button').addEventListener('click', function () {
  // TASK #4}
  var circle = document.querySelector('.circle-red')
  var circleHeight = window.getComputedStyle(circle, null).getPropertyValue('height')
  var circleWidth = window.getComputedStyle(circle, null).getPropertyValue('width')
  var intCircleHeight = parseInt(circleHeight)
  var intCircleWidth = parseInt(circleWidth)
  if (intCircleWidth < 320 && intCircleHeight < 320) {
    circle.style.height = (intCircleHeight * 2) + 'px'
    circle.style.width = (intCircleWidth * 2) + 'px'
  } else {
    circle.style.height = '40px'
    circle.style.width = ' 40px'
  }
})

document.querySelector('#remove button').addEventListener('click', function () {
  // TASK #5
})

document.querySelector('#reverse-squares button').addEventListener('click', function () {
  // TASK #6
})

document.querySelector('#pig-latin button').addEventListener('click', function () {
  // TASK #7
})

document.querySelector('#cycle-image button').addEventListener('click', function () {
  // TASK #8
})
