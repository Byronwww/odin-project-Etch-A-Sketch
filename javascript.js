// creates the initial grid on page load
const startRows = 10;
const startColumns = 10;
createGrid(startRows, startColumns);

/**
 * Creates a grid of rows and columns.
 * @param {int} rows How many rows to create.
 * @param {int} columns How many columns to create.
 */
function createGrid(rows, columns) {
  for (i = 0; i < rows; i++) {
    const container = document.querySelector('#container');
    const row = document.createElement('div');
    row.classList.add('row');
    row.setAttribute('id', 'Row' + i);
    for (y = 0; y < columns; y++) {
      const column = document.createElement('div');
      column.classList.add('column');
      column.setAttribute('id', 'Row' + i + '-Column' + y);
      row.appendChild(column);
    }
    container.appendChild(row);
  }
}

/**
 * Prompts user for how many rows and columns the grid should contain.
 */
function userSetGridSize() {
  const rows = prompt('How large would you like your grid to be? ' +
  '(Maximum size is 100 x 100)');
  if (rows <= 100 && rows > 0) {
    const columns = rows;
    container.textContent = ''; // clears the contents of the container
    createGrid(rows, columns);
  } else {
    alert('Maximum size is 100 x 100, Minimum size is 1 x 1');
    return;
  }
}

// create grid button functionality
const buttonCreateGrid = document.querySelector('#buttonCreateGrid');
buttonCreateGrid.addEventListener('click', userSetGridSize);


// color grid square under mouse functionality
document.addEventListener('mouseover', function(e) {
  const currentSquareString = String(e.target.className);
  currentSquare = e.target;
  if (currentSquareString == 'column' ) {
    currentSquare.style.backgroundColor = returnRGBColor();
  }

  /**
   * Provides a random RGB color value in the format of rgb(x,y,z)
   * @return {string} a random color value in hexadecimal format
   */
  function returnRGBColor() {
    const r = random256();
    const g = random256();
    const b = random256();
    const returnString = 'rgb('+ r + ','+ g + ', ' + b + ')';
    return returnString;
  }

  /**
   * Provides a random number between 1 and 256
   * @return {int} a random number between 1 and 256
   */
  function random256() {
    const number = Math.floor(Math.random() * 257);
    return number;
  }
});


/**
 * Clear Grid functionality
 * */
function clearGrid() {
  const allSquares = document.getElementsByClassName('column');
  for (i = 0; i < allSquares.length; i++) {
    allSquares[i].style.backgroundColor = 'rgb(256,256,256)';
  }
}

const buttonClearGrid = document.querySelector('#buttonClearGrid');
buttonClearGrid.addEventListener('click', clearGrid);

