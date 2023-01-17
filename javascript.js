/**
 * Creates a grid of rows and columns.
 * @param {int} rows How many rows to create.
 * @param {int} columns How many columns to create.
 */
function createGrid(rows, columns) {
  for (i = 0; i <= rows; i++) {
    const container = document.querySelector('#container');
    const row = document.createElement('div');
    row.classList.add('row');
    row.setAttribute('id', 'Row' + i);
    for (y=0; y<=columns; y++) {
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
  const rows = prompt('How large would you like your grid to be?');
  const columns = rows;
  container.textContent = ''; // clears the contents of the container
  createGrid(rows, columns);
}

createGrid(10, 10); // creates the initial grid on page load

// create grid button functionality
const button = document.querySelector('#button');
button.addEventListener('click', userSetGridSize);

// color grid square under mouse functionality
document.addEventListener('mouseover', function(e) {
  const currentSquareString = String(e.target.className);
  currentSquare = e.target;
  console.log(currentSquareString);
  if (currentSquareString == 'column' ) {
    currentSquare.style.backgroundColor = 'red';
  }
});

