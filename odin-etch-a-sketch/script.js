// sanity check
console.log("Hello World!");

const DEFAULT_SIZE = 16;

let currentSize = DEFAULT_SIZE;

function createGrid(size) {
  // Define the grid dimensions

  grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
  grid.style.gridTemplateRows = `repeat(${size},1fr)`;

  // Create the grid
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");
    cell.addEventListener("mouseover", changeColor);
    cell.addEventListener("mousedown", changeColor);
    grid.appendChild(cell);
  }
}

function changeColor(e) {
  if (e.type === "mouseover" && !mouseDown) return;

  e.target.style.backgroundColor = "black";
}

function clearGrid() {
  grid.textContent = ""; // remove all child of the grid
}

function resetGrid() {
  clearGrid();
  createGrid(currentSize); // create new grid
}

function changeSize(size) {
  currentSize = size;
}

const grid = document.querySelector(".grid");
const resetButton = document.querySelector(".resetButton");
const slider = document.getElementById("myRange");
const sliderValue = document.querySelector(".slider-value");
sliderValue.innerHTML = `${DEFAULT_SIZE} x ${DEFAULT_SIZE}`;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  // size = parseInt(this.value);
  changeSize(parseInt(this.value));
  sliderValue.innerHTML = `${this.value} x ${this.value}`;
  resetGrid();
};

resetButton.addEventListener("click", resetGrid);

window.onload = () => {
  createGrid(currentSize);
};
