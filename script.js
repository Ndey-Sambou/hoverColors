const container = document.getElementById('container');
const colors = [
  '#e74c3c',
  '#8e44ad',
  '#3498db',
  '#e67e22',
  '#2ecc71',
  '#9deb73',
  '#e66cd7',
  '#ffe414',
];

const SQUARES = 500;


for(let i = 0; i < 500; i++) {

  const square = document.createElement('div')

  square.classList.add('square')

  square.addEventListener('mouseover', function () {colorIn(square)
  }) 

  square.addEventListener('mouseout', function () {colorOut(square)
  })

  container.appendChild(square)


}

function colorIn (element) {
  const color = getRandomColor()
  element.style.background = color
  element.style.boxShadow = `0 0 22px ${color}, 0 0 10px ${color}`
}

function colorOut (element) {
  element.style.background = '#1d1d1d'
  element.style.boxShadow = '0 2px #000'
}

getRandomColor =  () => colors[Math.floor(Math.random() * 7)]













 