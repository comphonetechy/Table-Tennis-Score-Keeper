
const p1 = {
    score:0,
    display: document.querySelector("#p1Display"),
    button: document.querySelector("#p1Button")
}

const p2 = {
    score:0,
    display: document.querySelector("#p2Display"),
    button: document.querySelector("#p2Button")
}
const reset = document.querySelector("#reset")
const playto= document.querySelector("#playto")
let scoreLimit = 3

const resetScore = () => {
    for (player of [p1,p2]){
        player.score = 0
        player.display.textContent = 0
        player.display.style.color = "black"
        player.button.disabled = false
    }
}

reset.addEventListener("click", function (e){
    resetScore()
})

playto.addEventListener("change", function (e){
    scoreLimit = e.target.value
    resetScore()
})

p1Button.addEventListener("click", function(e){
    updateScore(p1)
})

p2Button.addEventListener("click", function(e){
    updateScore(p2)
})


const updateScore = (player) => {
    player.score += 1
    if (player.score === +scoreLimit){
        const winner = player === p1 ? p1 :p2;
        const loser = player === p1 ? p2 :p1;
        winner.display.style.color ="green"
        loser.display.style.color ="red"
        p1.button.disabled = p2.button.disabled = true
    }
    player.display.textContent =  player.score    
}


