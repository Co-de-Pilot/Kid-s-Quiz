import { useState } from "react";
import AppContext from "./AppContext";
import { QuestionBankDogs } from "../QuestionBank";
import {
  highlightingCorrectAnswer,
  isSelectedAnswerCorrect,
  initiateResultArray,
  upgradeResultArray,
} from "../helperfunctions";

const AppProvider = ({ children }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [correctAnswerCounter, setCorrectAnswerCounter] = useState(0);
  const [wrongAnswerCounter, setWrongAnswerCounter] = useState(0);
  const [isQuizFinished, setisQuizFinished] = useState(false);
  const [resultArray, setResultArray] = useState(
    initiateResultArray(QuestionBankDogs.length)
  );

  const handleOnClickAnswer = (event) => {
    highlightingCorrectAnswer(event.target.parentElement);

    let correctAnswer = document.querySelector("div.correct");

    setTimeout(() => {
      event.target.parentElement
        .querySelector("span")
        .classList.add("displayed");
    }, "2000");
    setTimeout(() => {
      setQuestionNumber(questionNumber + 1);
      event.target.parentElement
        .querySelector("span")
        .classList.remove("displayed");
      if (isSelectedAnswerCorrect(correctAnswer, event.target.parentElement)) {
        setCorrectAnswerCounter(correctAnswerCounter + 1);
        setResultArray(upgradeResultArray(questionNumber, resultArray, true));
      } else {
        setWrongAnswerCounter(wrongAnswerCounter + 1);
        setResultArray(upgradeResultArray(questionNumber, resultArray, false));
      }
      if (questionNumber >= QuestionBankDogs.length - 1) {
        setisQuizFinished(true);
      }
    }, "4000");
  };

  const contextValue = {
    isQuizFinished,
    questionNumber,
    correctAnswerCounter,
    wrongAnswerCounter,
    handleOnClickAnswer,
    resultArray,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
