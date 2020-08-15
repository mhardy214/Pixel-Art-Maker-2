// Select color input
// Select size input
const color = document.getElementById('colorPicker')
const sizePicker = document.getElementById('sizePicker')

// When size is submitted by the user, call makeGrid()

sizePicker.addEventListener('submit', function (evt) {
  const width = document.getElementById('inputWidth').value
  const height = document.getElementById('inputHeight').value
  evt.preventDefault(); makeGrid(height, width)
})

// Lets tiles change color when clicked
function colorChange (newCell) {
  newCell.addEventListener('click', function () {
    newCell.style.backgroundColor = color.value
  }); newCell.addEventListener('dblclick', function () {
    newCell.style.backgroundColor = ''
  })
}

// Makes the grid
function makeGrid (height, width) {
  const grid = document.getElementById('pixelCanvas')

  grid.innerHTML = ''

  for (let c = 0; c < height; c++) {
    const newColumn = grid.insertRow(c)
    for (let r = 0; r < width; r++) {
      const newCell = newColumn.insertCell()
      newCell.addEventListener('click', colorChange(newCell))
    };
  };
};
