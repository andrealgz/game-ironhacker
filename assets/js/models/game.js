/* class Game {

    
    start(){
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    //console.log(availableQuesions);


    getNewQuestion();
    game.classList.remove("hidden");
    loader.classList.add("hidden");
    };

    // Seleccionar siguiente pregunta //
    getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
      localStorage.setItem("mostRecentScore", score);

      //go to the end page
      return window.location.assign("end.html");
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
}

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

// Start the game function //
startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  //console.log(availableQuesions);
  getNewQuestion();
  game.classList.remove("hidden");
  loader.classList.add("hidden");
};

//Seleccionar siguiente pregunta //
getNewQuestion = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
	localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;

// Actualizar barra //
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  // console.log(availableQuesions);
  acceptingAnswers = true;
};

// Verificar result //
choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
	
	const classToApply=
		selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
	
	// Incrementar score //
	if (classToApply === "correct"){
		incrementScore(CORRECT_BONUS);
	}
	
	selectedChoice.parentElement.classList.add(classToApply);
		
	setTimeout(() => {
		selectedChoice.parentElement.classList.remove(classToApply);
		getNewQuestion();
	}, 1000);
	});
});

/* Update the score //
incrementScore = num => {
	score += num;
	scoreText.innerText = score;
};
