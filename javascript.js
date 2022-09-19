let row = +(prompt("Enter Row Of Board:"));
let col = +(prompt("Enter Column Of Board:"));
let b = document.getElementById("result");
let arrayRow = [];
let board = [];
let data = "";

for (let i = 0; i < col; i++) {
    arrayRow[i] = 0;
}

for (let i = 0; i < row; i++) {//phai co dong lenh nay` de khoi tao array board 2 chieu
    board[i] = [];
}

for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
        board[i][j] = arrayRow[j];
        data += board[i][j] + "&nbsp;&nbsp;";
    }
    data += "<br/>";
}
b.innerHTML = data;

function displayBoard() {
    let posX = +(prompt("X: "));
    let posY = +(prompt("Y: "));
    data = "";

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (i === posX && j === posY) {
                board[posX][posY] = "x";
            }
            data += board[i][j] + "&nbsp;&nbsp";
        }
        data += "<br/>";
    }
    b.innerHTML = data;
}