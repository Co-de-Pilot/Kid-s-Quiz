import { React, useContext } from "react";
import AppContext from "./context/AppContext";
import Quiz from "./components/Quiz/Quiz";
import QuizResult from "./components/QuizResult/QuizResult";
import { randomizeNumberArray } from "./helperfunctions";
import { QuestionBankDogs } from "./QuestionBank";
import "./App.css";

const questionIndexArray = randomizeNumberArray(
  QuestionBankDogs.length,
  QuestionBankDogs.length
);

function App() {
  const { isQuizFinished, correctAnswerCounter, wrongAnswerCounter } =
    useContext(AppContext);

  if (isQuizFinished) {
    return (
      <div className="app">
        <QuizResult
          Quizlength={QuestionBankDogs.length}
          CorrectAnswerCounter={correctAnswerCounter}
          WrongAnswerCounter={wrongAnswerCounter}
        />
      </div>
    );
  } else {
    return (
      <div className="app">
        <Quiz
          QuestionBank={QuestionBankDogs}
          QuestionIndexArray={questionIndexArray}
        />
      </div>
    );
  }
}

export default App;
