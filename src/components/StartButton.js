import React from "react";
import "./StartButton.scss";

const StartButton = ({ buttonActive }) => {
  console.log(buttonActive);
  return (
    <div className='startButton'>
      <button disabled={!buttonActive}>시작하기</button>
    </div>
  );
};

export default StartButton;
