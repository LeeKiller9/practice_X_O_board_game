let row = 4 //+(prompt("Enter Row Of Board:"));
let col = 6 //+(prompt("Enter Column Of Board:"));
let b = document.getElementById("result");
let arrayRow = [];
let board = [];
let data = "";
for (let i = 0; i < col; i++) {
    arrayRow[i] = 0;
}
for (let i = 0; i < row; i++) {
    board[i] = arrayRow;
}

for (let i = 0; i < row; i++) {
    data += "<br/>";
    for (let j = 0; j < col; j++) {
        data += board[i][j] + "&nbsp;&nbsp;";
    }
}
b.innerHTML = data;

console.log(row)
console.log(board);

function displayBoard() {
    let posX = 1//+(prompt("X: "));
    let posY = 1//+(prompt("Y: "));
    data = "";

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (i === posX && j === posY) {
                data += board[posX][posY] = "x";
            }
            data += board[i][j]; //+ "&nbsp;&nbsp";
        }
        data += "<br/>";
    }
    b.innerHTML = data;
}