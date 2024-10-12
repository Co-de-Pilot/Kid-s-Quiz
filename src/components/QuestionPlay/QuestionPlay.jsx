import { React, useState } from "react";
import Button from "../Button/Button";
import PlaySVG from "../../PlaySVG";
import "./QuestionPlay.css";

function QuestionPlay(props) {
  const { Url } = props;
  const [soundFile, setSoundFile] = useState(null);

  async function importFile() {
    const file = await import(`../../resources/quiz${Url}`);
    setSoundFile(file.default);
  }
  importFile();

  const Sound = new Audio(soundFile);

  const handlePlay = () => {
    Sound.play();
  };

  const PlayButton = () => {
    if (soundFile) {
      return (
        <Button
          children={<PlaySVG fillColor={"var(--color-orange)"} />}
          handleOnClick={handlePlay}
        />
      );
    } else {
      return (
        <Button
          children={<PlaySVG fillColor={"var(--color-orange)"} />}
          handleOnClick={null}
        />
      );
    }
  };

  return (
    <div className="question-play rainbow-border">
      <PlayButton />
    </div>
  );
}

export default QuestionPlay;
