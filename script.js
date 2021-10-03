const axe = document.querySelector(".axe");
const pickaxe = document.querySelector(".pickaxe");
const shovel = document.querySelector(".shovel");
const world = document.querySelector(".gameWorld");
const tiles = document.querySelector(".tiles");
const grass = document.querySelector("#grass");
const dirt = document.querySelector("#dirt");
const wood = document.querySelector("#wood");
const rock = document.querySelector("#rock");
const leaves = document.querySelector("#leaves");


const GROUND_LEVEL = 10;
const DEEPEST_LEVEL = 16;

world.style.backgroundColor = "#95d7f1"
const gridMatrix = {};
let selected;
let inventory = {grass: 0, dirt: 0, wood: 0, rock: 0, leaves: 0}
let invButtons = [axe, pickaxe, shovel, grass, wood, leaves, dirt, rock];
// createWorld();
const matrix = [];

createWorld(16, 20);


console.log(matrix);


function createWorld(rows, cols) {

    for (let c = 0; c < (rows * cols); c++) {
        let row = Math.floor(c / cols);
        let col = Math.floor(c % cols);
        let cell = document.createElement("div");
        cell.setAttribute("position", `${row}.${col}`);
        // cell.setAttribute("isEmpty", true);

        world.appendChild(cell).classList.add("isEmpty");
        gridMatrix[`${row}.${col}`] = cell;
        // matrix[row][col] = cell;
    }

    createLand();
    createTree(4);
    createTree(11);
    createRocks(15, 1);
    createRocks(16, 2);
    createRocks(17, 3);
    createRocks(18, 4);
    createRocks(19, 5);
}

function createLand() {
    let row = GROUND_LEVEL; // grass row
    for (let col = 0; col < 20; col++) {
        gridMatrix[`${row}.${col}`].classList.add("grass");
        gridMatrix[`${row}.${col}`].classList.remove("isEmpty");
    }
    for (row = GROUND_LEVEL + 1; row < DEEPEST_LEVEL; row++) {
        for (let col = 0; col < 20; col++) {
            gridMatrix[`${row}.${col}`].classList.add("dirt");
            gridMatrix[`${row}.${col}`].classList.remove("isEmpty");
        }
    }
}

function createTree(col) {
    for (let r = GROUND_LEVEL - 1; r > GROUND_LEVEL - 4; r--) {
        gridMatrix[`${r}.${col}`].classList.add("wood");
        gridMatrix[`${r}.${col}`].classList.remove("isEmpty");
    }
    for (let r = 6; r > 3; r--) {
        for (let c = col - 1; c < col + 2; c++) {
            gridMatrix[`${r}.${c}`].classList.add("leaves");
            gridMatrix[`${r}.${c}`].classList.remove("isEmpty");

        }
    }
}

function createRocks(col, height) {
    for (let i = GROUND_LEVEL - 1; i >= GROUND_LEVEL - height; i--) {
        gridMatrix[`${i}.${col}`].classList.add("rock");
        gridMatrix[`${i}.${col}`].classList.remove("isEmpty");
    }
}


function work(e) {
    // let row = e.target.gridRow;
    // console.log(row);
    let tilePosition = e.target.getAttribute("position").split('.');
    let row = tilePosition[0];
    let col = tilePosition[1];
    let target = e.target.classList;
    // console.log(gridMatrix);
    let row_ = row - 1;
    let tmp = gridMatrix[`${row_}.${col}`];
    console.log(tmp);
    switch (selected) {
        case "shovel":
            if (target.contains("grass")) {
                e.target.classList.remove("grass");
                e.target.classList.add("isEmpty");
                inventory.grass++;
                tiles.children[0].style.display = "block";
                tiles.children[0].innerHTML = `${inventory.grass}`;
            } else {
                if (target.contains("dirt")) {
                    e.target.classList.remove("dirt");
                    e.target.classList.add("isEmpty");
                    inventory.dirt++;
                    tiles.children[1].style.display = "block";
                    tiles.children[1].innerHTML = `${inventory.dirt}`;
                }
            }
            break;
        case "axe":
            if (target.contains("wood")) {
                e.target.classList.remove("wood");
                e.target.classList.add("isEmpty");
                inventory.wood++;
                tiles.children[2].style.display = "block";
                tiles.children[2].innerHTML = `${inventory.wood}`;
            } else {
                if (target.contains("leaves")) {
                    e.target.classList.remove("leaves");
                    e.target.classList.add("isEmpty");
                    inventory.leaves++;
                    tiles.children[4].style.display = "block";
                    tiles.children[4].innerHTML = `${inventory.leaves}`;
                }
            }
            break;
        case "pickaxe":
            if (target.contains("rock")) {
                e.target.classList.remove("rock");
                e.target.classList.add("isEmpty");
                inventory.rock++;
                tiles.children[3].style.display = "block";
                tiles.children[3].innerHTML = `${inventory.rock}`;
            }
            break;
        case "grass":
            if (target.contains("isEmpty") && inventory.grass > 0) {
                e.target.classList.remove("isEmpty");
                e.target.classList.add("grass");
                // inventory.grass--;
                if (--inventory.grass === 0) {
                    tiles.children[0].style.display = "none";
                }
                tiles.children[0].innerHTML = `${inventory.grass}`;
            }
            break;
        case "dirt":
            if (target.contains("isEmpty") && inventory.dirt > 0) {
                e.target.classList.remove("isEmpty");
                e.target.classList.add("dirt");
                if (--inventory.dirt === 0) {
                    tiles.children[1].style.display = "none";
                }
                tiles.children[1].innerHTML = `${inventory.dirt}`;
            }
            break;
        case "wood":
            if (target.contains("isEmpty") && inventory.wood > 0) {
                e.target.classList.remove("isEmpty");
                e.target.classList.add("wood");
                if (--inventory.wood === 0) {
                    tiles.children[2].style.display = "none";
                }
                tiles.children[2].innerHTML = `${inventory.wood}`;
            }
            break;
        case "rock":
            if (target.contains("isEmpty") && inventory.rock > 0) {
                e.target.classList.remove("isEmpty");
                e.target.classList.add("rock");
                if (--inventory.rock === 0) {
                    tiles.children[3].style.display = "none";
                }
                tiles.children[3].innerHTML = `${inventory.rock}`;
            }
            break;
        case "leaves":
            if (target.contains("isEmpty") && inventory.leaves > 0) {
                e.target.classList.remove("isEmpty");
                e.target.classList.add("leaves");
                if (--inventory.leaves === 0) {
                    tiles.children[4].style.display = "none";
                }
                tiles.children[4].innerHTML = `${inventory.leaves}`;
            }
            break;
    }

}


//===========================

shovel.addEventListener("click", (element) => {
    unselectAll();
    shovel.classList.add("selected");
    selected = "shovel";
    world.addEventListener("click", work);
});

axe.addEventListener("click", (element) => {
    unselectAll();
    axe.classList.add("selected");
    selected = "axe";
    world.addEventListener("click", work);
});

pickaxe.addEventListener("click", (element) => {
    unselectAll();
    pickaxe.classList.add("selected");
    selected = "pickaxe";
    world.addEventListener("click", work);
});


grass.addEventListener("click", (element) => {
    unselectAll();
    grass.classList.add("selected");
    selected = "grass";
    world.addEventListener("click", work);
});

dirt.addEventListener("click", (element) => {
    unselectAll();
    dirt.classList.add("selected");
    selected = "dirt";
    world.addEventListener("click", work);
});

wood.addEventListener("click", (element) => {
    unselectAll();
    wood.classList.add("selected");
    selected = "wood";
    world.addEventListener("click", work);
});

rock.addEventListener("click", (element) => {
    unselectAll();
    rock.classList.add("selected");
    selected = "rock";
    world.addEventListener("click", work);
});

leaves.addEventListener("click", (element) => {
    unselectAll();
    leaves.classList.add("selected");
    selected = "leaves";
    world.addEventListener("click", work);
});

function unselectAll() {
    invButtons.forEach(e => {
        e.style.border = "1px solid white";
    })
}

