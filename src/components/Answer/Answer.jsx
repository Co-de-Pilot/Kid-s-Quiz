import React from "react";
import "./Answer.css";

function Answer(props) {
  const { handleOnClickAnswer, Image, Subject, Correct } = props;

  if (Correct) {
    return (
      <div
        className="answer correct rainbow-border"
        onClick={handleOnClickAnswer}
      >
        <img src={Image} alt={Subject} />
        <span>&#10003;</span>
      </div>
    );
  } else {
    return (
      <div className="answer rainbow-border" onClick={handleOnClickAnswer}>
        <img src={Image} alt={Subject} />
        <span className="incorrect-sign">X</span>
      </div>
    );
  }
}

export default Answer;
