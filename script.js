console.log("Welcome to the TicTacToe Game!")

let gameover = new Audio('gameover.mp3')
let music = new Audio ('music.mp3')
let clickSound = new Audio ('ting.mp3')

let turn = "X";

// Change Turn
const changeTurn = () => {
    return turn === "X" ? turn = "0" : turn = "X"
}

const reset = () => {
    console.log('reset button pressed')
    const reset = document.querySelectorAll('span')
    Array.from(reset).forEach((element) => {
        element.innerText = ""
    })
    turn = "X"
    document.getElementsByTagName('img')[0].style.width=0;
}

const checkWin = () => {
    let boxes = document.getElementsByTagName('span')
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    win.forEach((e)=>{
        if((boxes[e[0]].innerText === boxes[e[1]].innerText) && (boxes[e[1]].innerText === boxes[e[2]].innerText) && (boxes[e[0]].innerText !=="" )){
        document.getElementsByClassName("turn")[0].innerText = boxes[e[0]].innerText + ' Win!';
        console.log(boxes[e[0]].innerText + " Wins");
        reset()
        clickSound.pause()
        gameover.play()
        document.getElementsByTagName('img')[0].style.width="150px";
        }
    })

}

// Game Logic
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach((box) => {
    let boxText = box.querySelector("span")
    box.addEventListener('click', (e) => {
        boxText.innerText = turn;
        changeTurn()
        document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn
        clickSound.play()
        document.getElementsByTagName('img')[0].style.width=0;
        checkWin()   
    })
})

