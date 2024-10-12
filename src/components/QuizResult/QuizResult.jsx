import React from "react";
import FrissenKeltBagoly from "../../resources/quiz/quizresult/bagolytojasbol.png";
import BagolyFióka from "../../resources/quiz/quizresult/bagolyfioka.png";
import SzemüvegesBagoly from "../../resources/quiz/quizresult/szemuveges_bagoly.png";
import IskolázottBagoly from "../../resources/quiz/quizresult/iskolazott_bagoly.png";
import "./QuizResult.css";

function QuizResult(props) {
  const { Quizlength, CorrectAnswerCounter, WrongAnswerCounter } = props;

  const resultPercentage =
    Math.round((CorrectAnswerCounter / Quizlength) * 10000) / 100;

  let resultOwl;

  if (resultPercentage > 80) {
    resultOwl = IskolázottBagoly;
  } else if (resultPercentage > 60) {
    resultOwl = SzemüvegesBagoly;
  } else if (resultPercentage > 40) {
    resultOwl = BagolyFióka;
  } else {
    resultOwl = FrissenKeltBagoly;
  }

  return (
    <div className="quiz-result">
      <div className="quiz-result-owl rainbow-border">
        <img src={resultOwl} alt="Result Owl" />
      </div>
      <div className="quiz-result-datas rainbow-border">
        <h3>Hazai ízeltlábúak</h3>
        <p>{Quizlength} kvízkérdés</p>
        <p>&#10003;: {CorrectAnswerCounter}</p>
        <p>X: {WrongAnswerCounter}</p>
        <p>{resultPercentage}%-os eredmény</p>
      </div>
    </div>
  );
}

export default QuizResult;
