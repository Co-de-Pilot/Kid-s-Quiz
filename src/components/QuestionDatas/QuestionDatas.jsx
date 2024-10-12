import { React, useContext } from "react";
import AppContext from "../../context/AppContext";
import "./QuestionDatas.css";

function QuestionDatas(props) {
  const { Quizlength } = props;
  const { questionNumber, correctAnswerCounter, wrongAnswerCounter } =
    useContext(AppContext);

  return (
    <div className="question-data rainbow-border">
      <p>
        {questionNumber + 1}/{Quizlength}
      </p>
      <p>&#10003;: {correctAnswerCounter}</p>
      <p>X: {wrongAnswerCounter}</p>
    </div>
  );
}

export default QuestionDatas;
