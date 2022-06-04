class Game {
  constructor(
    questionBoxes,
    audienceBtn,
    tlfBtn,
    divideBtn,
    questionElement,
    answerBoxes
  ) {
    this.questionBoxes = questionBoxes;
    this.audienceBtn = audienceBtn;
    this.tlfBtn = tlfBtn;
    this.divideBtn = divideBtn;
    this.questionElement = questionElement;
    this.answerBoxes = answerBoxes;
    this.currentQuestionIndex = null;
    this.questions = [];
  }

  start() {
    this.setListeners();
    this.setRandomQuestions();
    this.drawQuestion();
    // TODO: set random questions
    // TODO: set listeners
    // TODO: init current cuestion, currentQuestionIndex = 0
  }

  setRandomQuestions() {
    this.questions = questions;
    this.currentQuestionIndex = 0;
    // TODO: select random questions from "questions" object
    // and set them on questionBoxes
  }

  setListeners() {
    // TODO: audience btn click
    // TODO: tlf btn click
    // TODO: divide btn click
    // TODO: answers btn click
    this.answerBoxes.forEach((box) => {
      box.addEventListener("click", (event) => {
        console.log(event.target);
        this.onAnswerClick(event.target.innerText);
      });
    });
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
    // TODO: disable 2 wrong answers
    // TODO: remove listener => removeEventListener
    // TODO: add css class to disable button
  }

  onAnswerClick(answer) {
    if (this.questions[this.currentQuestionIndex].trueAnswer === answer) {
      this.questionBoxes[14 - this.currentQuestionIndex].innerText = "OK";
      this.currentQuestionIndex++;
      this.drawQuestion();
    } else {
      console.log("errorrrrr");
    }
    // TODO: add css class to apply orange color
    // setTimeout:
    // TODO: check if answer is valid, check questions[currentQuestionIndex]
    // if valid: inc currentQuestion. this.drawQuestion()
    // else: game over
  }

  drawQuestion() {
    const questionObj = this.questions[this.currentQuestionIndex];

    this.questionElement.innerText = questionObj.question;

    this.answerBoxes.forEach((box, i) => {
      box.innerText = questionObj.answer[i];
    });
    // TODO: set current question on question box. innerText = ...
    // TODO: draw answers on answerBoxes
    // TODO: add css class to questionbox
  }
}
