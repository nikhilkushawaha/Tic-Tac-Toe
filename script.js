console.log("Welcome to Tic Tac Toe");
let tap = new Audio("./assets/tap.wav");
let over = new Audio("./assets/gameover.wav");
let resetAudio = new Audio("./assets/reset.mp3")
let turn = "X";
let gameOver = false;

const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 0, 5, 0],
        [3, 4, 5, 0, 15, 0],
        [6, 7, 8, 0, 25, 0],
        [0, 3, 6, -10, 15, 90],
        [1, 4, 7, 0, 15, 90],
        [2, 5, 8, 10, 15, 90],
        [0, 4, 8, 0, 15, 45],
        [2, 4, 6, 0, 15, 135],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won"
            gameOver = true
            document.querySelector(".line").style.width = "30vw"
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".gameOver").getElementsByTagName("img")[0].style.width = "30vw"
            setTimeout(() => {
                document.querySelector(".gameOver").getElementsByTagName("img")[0].style.width = "0px"
            }, 4000);

            over.play();

        }
    })
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            tap.play();
            checkWin();
            if (!gameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }

        }
    })
})

// let reset = document.getElementById("reset");
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"
    gameOver = false
    if (!gameOver) {
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    }
    document.querySelector(".gameOver").getElementsByTagName("img")[0].style.width = "0px"
    document.querySelector(".line").style.width = "0"
    resetAudio.play();
})