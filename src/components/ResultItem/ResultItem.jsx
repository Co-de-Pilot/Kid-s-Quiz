import React from "react";

function ResultItem(props) {
  const { className, content } = props;

  return <span className={className}>{content}</span>;
}

export default ResultItem;
