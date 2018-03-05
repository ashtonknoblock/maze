function start() {
    const numberOfCols = 20;
    const numberOfRows = 15;
    var boxtop = 200;
    var boxleft = 200;

    var rightPressed = false;
    var leftPressed = false;
    var upPressed = false;
    var downPressed = false;
    var box = document.getElementById("box");

    let map = [
        "WWWWWWWWWWWWWWWWWWWWW",
        "W   W     W     W W W",
        "W W W WWW WWWWW W W W",
        "W W W   W     W W   W",
        "W WWWWWWW W WWW W W W",
        "W         W     W W W",
        "W WWW WWWWW WWWWW W W",
        "W W   W   W W     W W",
        "W WWWWW W W W WWW W F",
        "S     W W W W W W WWW",
        "WWWWW W W W W W W W W",
        "W     W W W   W W W W",
        "W WWWWWWW WWWWW W W W",
        "W       W       W   W",
        "WWWWWWWWWWWWWWWWWWWWW"
    ];



    const mapLen = map.length;




    const gameBoard = document.getElementById('container');
    const makeGrid = (start) => {
        //go through the array.length
        for (let row = 0; row < start.length; row++) {
            const rows = document.createElement('div');
            rows.classList.add('row');
            let playerPos;
            //go through the string
            //add dive + give class
            let string = start[row];
            for (let char = 0; char < string.length; char++) {
                letter = string[char];
                const cell = document.createElement('div');


                if (letter === "W") {
                    cell.classList.add('cell');

                } else if (letter === "S") {
                    // cell.classList.add('box');
                    cell.setAttribute('id', "player");

                } else {
                    cell.classList.add('blank');

                }

                rows.appendChild(cell);

            }

            gameBoard.appendChild(rows);
        }
    }



    makeGrid(map);

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    function keyDownHandler(e) {

        if (e.keyCode == 39) {
            reset(gameBoard);
            for (i = 0; i < map.length; i++) {
                let splitRow = map[i].split("");
                let s = splitRow.indexOf("S");
                if (map[i].includes("S") && map[i][s + 1] == " ") {

                    splitRow.splice(s, 1);
                    splitRow.splice((s + 1), 0, "S");
                    let joinRow = splitRow.join('');
                    map[i] = joinRow;
                    let newMap = map;
                }
                if (map[i].includes("S") && map[i][s + 1] == "F") {

                    splitRow.splice(s, 1);
                    splitRow.splice((s + 1), 0, "S");
                    let joinRow = splitRow.join('');
                    map[i] = joinRow;
                    let newMap = map;
                    alert("You win");
                }
            }
            makeGrid(map);
            console.log(map);
            // console.log("right Pressed");
        } else if (e.keyCode == 37) {
            reset(gameBoard);
            for (i = 0; i < map.length; i++) {
                let splitRow = map[i].split("");
                let s = splitRow.indexOf("S");
                if (map[i].includes("S") && map[i][s - 1] == " ") {

                    splitRow.splice(s, 1);
                    splitRow.splice((s - 1), 0, "S");
                    let joinRow = splitRow.join('');
                    map[i] = joinRow;
                    let newMap = map;
                }
            }
            makeGrid(map);
            leftPressed = true;
            // console.log("left Pressed");
        } else if (e.keyCode == 38) {
            reset(gameBoard);
            for (i = 0; i < map.length; i++) {
                if (map[i].includes("S")) {
                    let aboveRow = map[i - 1].split('');
                    let splitRow = map[i].split('');
                    let s = splitRow.indexOf("S");
                    if (map[i - 1][s] == " ") {
                        splitRow.splice(s, 1, " ");
                        aboveRow.splice((s), 1, "S");

                        let joinRow = splitRow.join('');
                        map[i] = joinRow;

                        let joinRow2 = aboveRow.join('');
                        map[i - 1] = joinRow2;

                        let newMap = map;
                    }
                    else {
                        let newMap = map;
                    }
                }
            }
            makeGrid(map);
            upPressed = true;
            // console.log("up Pressed");
        } else if (e.keyCode == 40) {
            reset(gameBoard);
            for (i = 0; i < map.length; i++) {
                if (map[i].includes("S")) {
                    let underRow = map[i + 1].split('');
                    let splitRow = map[i].split('');
                    let s = splitRow.indexOf("S");
                    if (map[i + 1][s] == " ") {
                        splitRow.splice(s, 1, " ");
                        underRow.splice((s), 1, "S");

                        let joinRow = splitRow.join('');
                        map[i] = joinRow;

                        let joinRow2 = underRow.join('');
                        map[i + 1] = joinRow2;

                        let newMap = map;
                    }
                    else {
                        let newMap = map;
                    } 
                    break;
                }
            }
            makeGrid(map);
            downPressed = true;
            // console.log("down Pressed");
        }
    }


    function keyUpHandler(e) {
        if (e.keyCode == 39) {
            rightPressed = false;
        } else if (e.keyCode == 37) {
            leftPressed = false;
        } else if (e.keyCode == 38) {
            upPressed = false;
        } else if (e.keyCode == 40) {
            downPressed = false;
        }
    }
}

function reset(main) {
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}