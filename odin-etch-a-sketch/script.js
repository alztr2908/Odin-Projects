/*

for row  
    div    
    for column -> flex
        div
    
*/

function createGrid() {
  // Define the grid dimensions
  const numRows = 16;
  const numCols = 16;

  // Create the grid
  for (let row = 0; row < numRows; row++) {
    const rowContainer = document.createElement("div");
    rowContainer.classList.add("grid-row");
    for (let col = 0; col < numCols; col++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "black";
        //   cell.setAttribute("class", "grid-cell-colored");
        //   console.log(cell);
      });
      rowContainer.appendChild(cell);
    }
    grid.appendChild(rowContainer);
  }
}

// sanity check
console.log("Hello World!");

const grid = document.querySelector(".grid");
const resetButton = document.querySelector(".resetButton");

createGrid();

resetButton.addEventListener("click", () => {
  grid.textContent = ""; // remove all child of the grid
  createGrid(); // create new grid
});
