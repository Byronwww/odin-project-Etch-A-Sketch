/**
 * Creates a grid of rows and columns
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

createGrid(50, 50);
