class Game {
  constructor(questionBoxes, audienceBtn, tlfBtn, divideBtn, questionElement, answerBoxes) {
    this.questionBoxes = questionBoxes;
    this.audienceBtn = audienceBtn;
    this.tlfBtn = tlfBtn;
    this.divideBtn = divideBtn;
    this.questionElement = questionElement;
    this.answerBoxes = answerBoxes;
    this.currentQuestionIndex = 0;
    this.questions = [];
    this.intervalId = null;
    this.newAudioCountDown = new Audio("./assets/sounds/Respuestas.mp3");
    this.newAudioCountDown.volume = 0.5;
    this.helps = {
      public: true,
      telephone: true,
      fifty: true,
    }
  }

  start() {
    this.setListeners();
    this.setRandomQuestions();
    this.drawQuestion();
    this.countDown();
  }
  

  prepareQuestion(){
    function getRamdonRankedQuestion(rank){
      const rankedQuestions = questionsDataBase.filter((question) => {
       return question.rank === rank
      })
      return rankedQuestions[Math.floor(Math.random() * rankedQuestions.length)];
    }
    this.questions = []
    for (let rank = 1; rank <= 15; rank++) {
      const question = getRamdonRankedQuestion(rank)
      this.questions.push(question)
    }
  }

  setRandomQuestions() {
    this.prepareQuestion(); 
  }

  setListeners() {
    this.answerBoxes.forEach((answerbox) => {
      answerbox.addEventListener("click", (event) => {
        this.onAnswerClick(event.target);
      });
    });

    this.audienceBtn.addEventListener("click",() => {
      this.onClickAudience();
    })

    this.tlfBtn.addEventListener("click",() =>{
      this.onClickTlf();
    })

    this.divideBtn.addEventListener("click",()=>{
      if (this.helps.fifty) {
        this.onClickDivide();
        this.helps.fifty = false;
        /*this.divideBtn.classList.add('')*/
      }
      
    })
  }

  onClickAudience() {
    // TODO: pensarlo...
    // TODO: remove listener => removeEventListener
    // TODO: add css class to disable button
  }

  onClickTlf() {
    // TODO: Carlos y Juli
    // TODO: remove listener => removeEventListener
    // TODO: add css class to disable button
  }


  onClickDivide() {
    const questionObj = this.questions[this.currentQuestionIndex];
    const wrongAnswers = questionObj.answer
      .filter(answer => answer !== questionObj.trueAnswer)
      .sort( () => { return Math.random() - 0.5 })
      .splice(1);
    console.log(wrongAnswers);
    this.answerBoxes.forEach((box) => {
      if (wrongAnswers.includes(box.innerText)) {
        box.classList.add('no-visible');
      }
    });
  }

  onAnswerClick(answerBox) {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.newAudioCountDown.pause();
    
    if (this.questions[this.currentQuestionIndex].trueAnswer === answerBox.innerText) {
      setTimeout(() => {
        answerBox.parentNode.classList.add('success-answer');
      } ,2000)
    
      setTimeout(() => {
        this.questionBoxes.forEach((questionBox) => {
          questionBox.classList.remove('score');
        })
        this.questionBoxes[14 - this.currentQuestionIndex].classList.add('score');
        this.currentQuestionIndex++;
        this.countDown();
        this.drawQuestion();
        answerBox.parentNode.classList.remove('success-answer');
      } ,5000)
      
    } else {
      setTimeout ( () => {
        answerBox.parentNode.classList.add('fail-answer');
      },3000)

      setTimeout ( ()=> {
        this.trueAnswer();
      },5500)
      this.gameOver();
    }
  }


  trueAnswer(){
      this.answerBoxes.forEach((box) => {
        if (this.questions[this.currentQuestionIndex].trueAnswer === box.innerText) {
          box.parentNode.classList.add('pending-answer')
          }
      });
  }  


  drawQuestion() {
    const questionObj = this.questions[this.currentQuestionIndex];

    this.questionElement.innerText = questionObj.question;

    this.answerBoxes.forEach((box, i) => {
      box.innerText = questionObj.answer[i];
      box.classList.remove('no-visible');
    });
  }

  countDown(){
    this.newAudioCountDown.play();
    let time=20;
    this.intervalId = setInterval(() => { 
      document.getElementById('timeOut').innerText=time.toString().padStart(2,"0"); 
      if(time <= 0){
        clearInterval(this.intervalId);
        this.intervalId=null;
        this.newAudioCountDown.pause();
        this.gameOver();
      }else{
        time -=1; 
      }
    }, 1000);
  }


  gameOver(){
    console.log("HAS PERDIDO")
    /*resetButton = document.createElement('button');
    resetButton.textContent = 'Otra vez!';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);*/
  }
}
