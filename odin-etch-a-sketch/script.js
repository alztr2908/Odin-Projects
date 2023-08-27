function createGrid() {
  // Define the grid dimensions
  const size = 10;

  grid.style.gridTemplateColumns = `repeat(${size},1fr)`;
  grid.style.gridTemplateRows = `repeat(${size},1fr)`;

  // Create the grid
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "black";
    });
    grid.appendChild(cell);
  }
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

createGrid();

resetButton.addEventListener("click", resetGrid);
