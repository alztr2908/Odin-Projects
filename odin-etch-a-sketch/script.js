/*

for row  
    div    
    for column -> flex
        div
    
*/

// sanity check
console.log("Hello World!");

const grid = document.querySelector(".grid");
// const rowContainer =

// Define the grid dimensions
const numRows = 5;
const numCols = 5;

// Create the grid
for (let row = 0; row < numRows; row++) {
  const rowContainer = document.createElement("div");
  rowContainer.classList.add("grid-row");
  for (let col = 0; col < numCols; col++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");
    // cell.textContent = `(${row}, ${col})`; // You can customize the cell content here
    rowContainer.appendChild(cell);
  }
  grid.appendChild(rowContainer);
}
