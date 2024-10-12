import React from "react";
import "./Question.css";

function Question(props) {
  const { Subject } = props;

  return (
    <div className="question rainbow-border">
      <p>Melyik állat az alábbiak közül a(z) {Subject}?</p>
    </div>
  );
}

export default Question;
