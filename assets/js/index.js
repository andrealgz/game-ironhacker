document.addEventListener('DOMContentLoaded', () => {

    const game = new Game();

    game.start()
    
    const randomNumber = Math.floor(Math.random() * questions.easy.length);
    document.querySelector('.question > h2').innerText = questions.easy[randomNumber].question
    const answer = document.querySelectorAll('.answers .button');
    for (let i = 0; i < Array.from(answer).length; i++) {
        answer[i].innerText = questions.easy[randomNumber].answer[i] 
    }

    const buttons = document.querySelectorAll('.button');
    for (let button of buttons) {
        button.addEventListener('click', (event) => {
            console.log(event.currentTarget.innerText)
        })
    }
})

//1º funcionalidad del juego




//2º crear clase juego (game) que sera la que ejecute el juego 


