import { React, useContext } from "react";
import AppContext from "../../context/AppContext";
import ResultField from "../ResultContainer/ResultContainer";
import MoreInfo from "../MoreInfo/MoreInfo";
import QuestionPlay from "../QuestionPlay/QuestionPlay";
import QuestionDatas from "../QuestionDatas/QuestionDatas";
import Question from "../Question/Question";
import AnswerContainer from "../AnswerContainer/AnswerContainer";
import { randomizeNumberArray } from "../../helperfunctions";
import "./Quiz.css";

function Quiz(props) {
  const { QuestionBank, QuestionIndexArray } = props;
  const { questionNumber, handleOnClickAnswer } = useContext(AppContext);

  let answerIndexArray = [];
  let InvalidAnswers = [];

  let actualQuestion = QuestionBank[QuestionIndexArray[questionNumber]];

  /*const createSound = async () => {
    let ttsApiUrl = "";
    if (actualQuestion.pronounced) {
      ttsApiUrl = `http://localhost:3300/tts/quiz&${actualQuestion.topic}&${actualQuestion.pronounced}`;
    } else {
      ttsApiUrl = `http://localhost:3300/tts/quiz&${actualQuestion.topic}&${actualQuestion.subject}`;
    }
    await fetch(ttsApiUrl);
  };
  createSound();*/

  answerIndexArray = randomizeNumberArray(QuestionBank.length, 3);

  let answers = [...QuestionBank];
  let validIndex = QuestionBank.indexOf(actualQuestion);
  answers.splice(validIndex, 1);

  for (let i = 0; i < answerIndexArray.length; i++) {
    InvalidAnswers.push(answers[answerIndexArray[i]]);
  }

  return (
    <>
      <header>
        <ResultField Quizlength={QuestionBank.length} />
        <div>
          <QuestionDatas Quizlength={QuestionBank.length} />
          <MoreInfo
            Url={`/${actualQuestion.topic}/${actualQuestion.subject}.m4a`}
          />
          <QuestionPlay
            Url={`/${actualQuestion.topic}/${actualQuestion.subject}.m4a`}
          />
        </div>
        <Question Subject={actualQuestion.subject} />
      </header>
      <main>
        <AnswerContainer
          ValidAnswer={actualQuestion}
          InvalidAnswers={InvalidAnswers}
          Subject={actualQuestion.subject}
          handleOnClickAnswer={handleOnClickAnswer}
        />
      </main>
    </>
  );
}

export default Quiz;
