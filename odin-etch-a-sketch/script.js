function createGrid() {
  // Define the grid dimensions
  const size = 32;

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
  createGrid(); // create new grid
}

// sanity check
console.log("Hello World!");

const grid = document.querySelector(".grid");
const resetButton = document.querySelector(".resetButton");

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

resetButton.addEventListener("click", resetGrid);

window.onload = () => {
  createGrid();
};
