import { React, useState } from "react";
import Button from "../Button/Button";
import InfoSVG from "../../InfoSVG";
import "./MoreInfo.css";

function MoreInfo(props) {
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

  const InfoButton = () => {
    if (soundFile) {
      return (
        <Button
          children={<InfoSVG fillColor={"var(--color-orange)"} />}
          handleOnClick={handlePlay}
        />
      );
    } else {
      return (
        <Button
          children={<InfoSVG fillColor={"var(--color-orange)"} />}
          handleOnClick={null}
        />
      );
    }
  };

  return (
    <div className="info rainbow-border">
      <InfoButton />
    </div>
  );
}

export default MoreInfo;
