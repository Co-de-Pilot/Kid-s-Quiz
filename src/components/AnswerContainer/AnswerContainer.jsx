import React from "react";
import Answer from "../Answer/Answer";
import "./AnswerContainer.css";

function AnswerContainer(props) {
  const { handleOnClickAnswer, ValidAnswer, InvalidAnswers, Subject } = props;

  let AnswerImages = [...InvalidAnswers];
  let randomNumber = Math.trunc(Math.random() * 4);

  AnswerImages.splice(randomNumber, 0, ValidAnswer);

  return (
    <div className="answercontainer">
      {AnswerImages.map((answerImage, index) => {
        if (index === randomNumber) {
          return (
            <Answer
              key={answerImage.id}
              handleOnClickAnswer={handleOnClickAnswer}
              Image={answerImage.image}
              Subject={Subject}
              Correct={true}
            />
          );
        } else {
          return (
            <Answer
              key={answerImage.id}
              handleOnClickAnswer={handleOnClickAnswer}
              Image={answerImage.image}
              Subject={Subject}
              Correct={false}
            />
          );
        }
      })}
    </div>
  );
}

export default AnswerContainer;
