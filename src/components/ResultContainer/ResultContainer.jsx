import React, { useContext } from "react";
import ResultItem from "../ResultItem/ResultItem";
import AppContext from "../../context/AppContext";
import { v4 as uuidv4 } from "uuid";
import "./ResultContainer.css";

function ResultContainer() {
  const { resultArray } = useContext(AppContext);

  return (
    <div className="result rainbow-border">
      {resultArray.map((resultItem, index) => {
        if (resultItem === "actual") {
          return (
            <ResultItem key={uuidv4()} className={resultItem} content="!" />
          );
        } else if (resultItem === "correct") {
          return (
            <ResultItem
              key={uuidv4()}
              className={resultItem}
              content="&#10003;"
            />
          );
        } else if (resultItem === "wrong") {
          return (
            <ResultItem key={uuidv4()} className={resultItem} content="X" />
          );
        } else if (resultItem === null) {
          return <ResultItem key={uuidv4()} className="" content="?" />;
        }
      })}
    </div>
  );
}

export default ResultContainer;
