
/**
 * Creates a grid of rows and columns
 * @param {int} rows How many rows to create.
 * @param {int} columns How many columns to create. 
 */
function createGrid(rows) {
  for (i = 0; i <= rows; i++) {
    const container = document.querySelector('#container');
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'This is row' + i;
    container.appendChild(content);
  }
}

createGrid(16);


