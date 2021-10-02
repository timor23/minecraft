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
        cell.setAttribute("position", `${row}.${col}`);
        // cell.setAttribute("isEmpty", true);

        world.appendChild(cell).classList.add("isEmpty");
        gridMatrix[`${row}.${col}`] = cell;
    }
}

function createLand() {
    let row = 10; // grass row
    for (let col = 0; col < 20; col++) {
        gridMatrix[`${row}.${col}`].classList.add("grass");
        gridMatrix[`${row}.${col}`].classList.remove("isEmpty");
    }
    for (row = 11; row < 16; row++) {
        for (let col = 0; col < 20; col++) {
            gridMatrix[`${row}.${col}`].classList.add("dirt");
            gridMatrix[`${row}.${col}`].classList.remove("isEmpty");
        }
    }
}




function collectMaterial(e) {
    // let row = e.target.gridRow;
    // console.log(row);
    let target = e.target.classList;
    let tilePosition = e.target.getAttribute("position");
    console.log(tilePosition);
    // console.log(e.target.getAttribute("isEmpty"));
    if (true) {
        if (target.contains("dirt") || target.contains("grass")) {
            e.target.classList.remove("grass", "dirt");
            e.target.classList.add("isEmpty");
        }
    }

}


//===========================

shovel.addEventListener("click", (element) => {
    shovel.classList.add("selected");
    world.addEventListener("click", collectMaterial);

});