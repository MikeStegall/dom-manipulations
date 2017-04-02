
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
  var liEl = document.querySelectorAll('#userList li')
  for (var i = 0; i < liEl.length; i++) {
    if (liEl[i].textContent.indexOf('inactive') !== -1) {
      liEl[i].remove()
    }
  }
})

document.querySelector('#reverse-squares button').addEventListener('click', function () {
  // TASK #6
  var square = document.querySelectorAll('.answer-box span')
  var squareArr = Array.from(square)
  var reverseSquare = squareArr.reverse()
  var squarePlace = document.querySelector('#reverse-squares .answer-box')
  for (var i = 0; i < reverseSquare.length; i++) {
    squarePlace.appendChild(reverseSquare[i])
  }
})

document.querySelector('#pig-latin button').addEventListener('click', function () {
  // TASK #7
  var list = document.querySelectorAll('#tasks li')
  for (var i = 0; i < list.length; i++) {
    var listText = list[i].innerHTML
    var reverseListText = listText.split('').reverse().join('')
    list[i].innerHTML = reverseListText
  }
})

document.querySelector('#cycle-image button').addEventListener('click', function () {
  // TASK #8
  var img = document.querySelector('#city-img')
  var imgSrc = img.getAttribute('src')
  var subtractImgSrc = imgSrc.substr(0, imgSrc.length - 1)
  var int = Math.floor(Math.random() * 9)
  img.setAttribute('src', subtractImgSrc + int.toString())
  console.log(int)
  console.log(imgSrc)
})
