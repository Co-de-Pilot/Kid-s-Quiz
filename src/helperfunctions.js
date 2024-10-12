const randomizeNumberArray = (itemLength, resultLength) => {
  let array = [];
  do {
    let randomNumber = Math.trunc(Math.random() * itemLength);
    if (!array.includes(randomNumber)) {
      array.push(randomNumber);
    }
  } while (array.length < resultLength);
  return array;
};

const highlightingCorrectAnswer = (selectedAnswer) => {
  selectedAnswer.classList.add("selected");
  let notSelectedAnswers = document.querySelectorAll(
    "div.answer:not(.selected)"
  );
  notSelectedAnswers.forEach((answer) => {
    answer.classList.add("not-selected");
  });
  setTimeout(() => {
    notSelectedAnswers.forEach((answer) => {
      answer.classList.remove("not-selected");
    });
    selectedAnswer.classList.remove("selected");
  }, "4000");
};

const isSelectedAnswerCorrect = (correctAnswer, selectedAnswer) => {
  if (correctAnswer === selectedAnswer) {
    return true;
  } else {
    return false;
  }
};

const initiateResultArray = (length) => {
  let newResultArray = new Array(length).fill(null);
  newResultArray[0] = "actual";
  return newResultArray;
};

const upgradeResultArray = (questionNumber, resultArray, correct) => {
  let newResultArray = [...resultArray];
  if (correct) {
    newResultArray[questionNumber] = "correct";
  } else if (!correct) {
    newResultArray[questionNumber] = "wrong";
  }
  newResultArray[questionNumber + 1] = "actual";
  return newResultArray;
};

export {
  randomizeNumberArray,
  highlightingCorrectAnswer,
  isSelectedAnswerCorrect,
  initiateResultArray,
  upgradeResultArray,
};
