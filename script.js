const axe = document.querySelector(".axe");
const pickaxe = document.querySelector(".pickaxe");
const shovel = document.querySelector(".shovel");
const world = document.querySelector(".gameWorld");

const gridMatrix = {};
// createWorld();
world.style.backgroundColor = "#95d7f1"

createWorld(16, 20);
createLand();


function createWorld(rows, cols) {

    for (let c = 0; c < (rows * cols); c++) {
        let row = Math.floor(c / cols);
        let col = Math.floor(c % cols);
        let cell = document.createElement("div");
        // cell.style.background = "#95d7f1";
        world.appendChild(cell).className = "grid-item";
        gridMatrix[`${row}.${col}`] = cell;
    }
}

function createLand() {
    let row = 10; // grass row
    for (let col = 0; col < 20; col++) {
        gridMatrix[`${row}.${col}`].classList.add("grass");
    }
    for (row = 11; row < 16; row++) {
        for (let col = 0; col < 20; col++) {
            gridMatrix[`${row}.${col}`].classList.add("dirt");
        }
    }
}


//===========================
// Creates a default grid sized 16x16
// function defaultGrid() {
//     makeRows(16);
//     makeColumns(20);
// }

// Takes (rows, columns) input and makes a grid
// function makeRows(rowNum) {

//     // Creates rows
//     for (r = 0; r < rowNum; r++) {
//         let row = document.createElement("div");
//         world.appendChild(row).className = "gridRow";
//     }
// }

// // Creates columns
// function makeColumns(cellNum) {
//     for (i = 0; i < rows.length; i++) {
//         for (j = 0; j < cellNum; j++) {
//             let newCell = document.createElement("div");
//             newCell.style.background = "#95d7f1";
//             rows[j].appendChild(newCell).className = "cell";
//         }

//     }
// }
//////=========
// function createWorld() {
//     for (let r = 0; r < 17; r++) {
//         for (let c = 0; c < 25; c++) {
//             let tile = document.createElement("div");
//             tile.style.backgroundColor = '#95d7f1';
//             world.appendChild(tile);
//             tile.style.gridRow = r;
//             tile.style.gridColumn = c;
//
//         }
//     }
// }