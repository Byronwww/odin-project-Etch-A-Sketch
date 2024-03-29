let startRows = '';
let startColumns = '';
const initialStartRows = 10;
const initialStartColumns = 10;
let colourMode = '';

init();

/**
 * Initialization function to set the initial values of the program and
 * to reset variables to these initial values
 */
function init() {
  startRows = initialStartRows;
  startColumns = initialStartColumns;
}

// creates the initial grid on page load
createGrid(startRows, startColumns);

/**
 * Creates a grid of rows and columns.
 * @param {int} rows How many rows to create.
 * @param {int} columns How many columns to create.
 */
function createGrid(rows, columns) {
  const container = document.querySelector('#container');
  container.innerHTML = '';
  for (i = 0; i < rows; i++) {
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
  startRows = prompt('How large would you like your grid to be? ' +
  '(Maximum size is 100 x 100)', '10');
  if (startRows <= 100 && startRows >= 10) {
    startColumns = startRows;
    container.textContent = ''; // clears the contents of the container
    createGrid(startRows, startColumns);
  } else if (startRows == null) {
    return;
  } else {
    alert('Maximum size is 100 x 100, Minimum size is 10 x 10');
    startRows=initialStartRows;
    return;
  }
}

/**
 * displays warning message before clearing the grid
 */
function clearGrid() {
  if (confirm('Are you sure you want to reset the grid?' +
    ' All coloured squares will be erased') == true) {
    createGrid(startRows, startColumns);
  } else {
    return;
  }
}

// color grid square under mouse functionality
document.addEventListener('mouseover', function(e) {
  const currentSquareString = String(e.target.className);
  currentSquare = e.target;
  if (currentSquareString == 'column') {
    if (colourMode == 'rainbow') {
      currentSquare.style.backgroundColor = returnRandomRGBColor();
    }
    if (colourMode =='shading') {
      currentSquare.style.backgroundColor = returnDarkerShade();
    }
    if (colourMode =='classic') {
      currentSquare.style.backgroundColor = returnBlack();
    }
    if (colourMode =='eraser') {
      currentSquare.style.backgroundColor = returnEraser();
    }
  }

  /**
  * @return {string} rgb value set to black
  */
  function returnBlack() {
    const r = 0;
    const g = 0;
    const b = 0;
    const returnString = 'rgb('+ r + ','+ g + ', ' + b + ')';
    return returnString;
  }

  /**
  * @return {string} rgb value set to white
  */
  function returnEraser() {
    const r = 255;
    const g = 255;
    const b = 255;
    const returnString = 'rgb('+ r + ','+ g + ', ' + b + ')';
    return returnString;
  }

  /**
  * makes the currentSquare progressively darker
  */
  function returnDarkerShade() {
    currentRGB = currentSquare.style.backgroundColor;
    if (currentRGB == '') {
      currentSquare.style.backgroundColor = returnEraser();
    } else {
      currentRGBSliced = currentRGB.slice(4, -1);
      arrayRGB = currentRGBSliced.split(',');
      if (arrayRGB[0] > 0) {
        arrayRGB[0]-=15;
      }
      if (arrayRGB[1] > 0) {
        arrayRGB[1]-=15;
      }
      if (arrayRGB[2] > 0) {
        arrayRGB[2]-=15;
      }
      const rgbReturn = 'rgb('+ arrayRGB + ')';
      currentSquare.style.backgroundColor = rgbReturn;
    }
  }

  /**
   * Provides a random RGB color value in the format of rgb(x,y,z)
   * @return {string} a random color value in hexadecimal format
   */
  function returnRandomRGBColor() {
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


/** Sets the colouring in mode
  * @param {string} mode rainbow
  */
function modeSelector(mode) {
  colourMode = mode;
}

// Create Grid button
const buttonCreateGrid = document.querySelector('#buttonCreateGrid');
buttonCreateGrid.addEventListener('click', userSetGridSize);

// Clear Grid button
const buttonClearGrid = document.querySelector('#buttonClearGrid');
buttonClearGrid.addEventListener('click', function() {
  clearGrid();
});

// Rainbow Mode button
const buttonModeSelectRainbow =
document.querySelector('#buttonModeSelectRainbow');
buttonModeSelectRainbow.addEventListener('click', function() {
  modeSelector('rainbow');
});

// Shading Mode button
const buttonModeSelectShading =
document.querySelector('#buttonModeSelectShading');
buttonModeSelectShading.addEventListener('click', function() {
  modeSelector('shading');
});

// Classic Mode button
const buttonModeSelectClassic =
document.querySelector('#buttonModeSelectClassic');
buttonModeSelectClassic.addEventListener('click', function() {
  modeSelector('classic');
});

// Eraser Mode button
const buttonModeSelectEraser =
document.querySelector('#buttonModeSelectEraser');
buttonModeSelectEraser.addEventListener('click', function() {
  modeSelector('eraser');
});


