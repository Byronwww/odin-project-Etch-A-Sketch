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
      // column.textContent = i + ',' + y;
      row.appendChild(column);
    }
    container.appendChild(row);
  }
}

/**
 * Prompts user for how many rows and columns the grid should contain.
 */
function userProvideGridRowsColumns() {
  const rows = prompt('How Many Rows Would You Like?');
  const columns = prompt('How Many Columns Would You Like?');
  createGrid(rows, columns);
}


const button = document.querySelector('#button');
button.addEventListener('click', userProvideGridRowsColumns);

