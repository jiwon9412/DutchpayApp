import React from "react";
import "./StartButton.scss";

const StartButton = ({ buttonActive, calculateDutchPay }) => {
  const handleClick = () => {
    calculateDutchPay();
  };

  return (
    <div className='startButton'>
      <button disabled={!buttonActive} onClick={handleClick}>
        시작하기
      </button>
    </div>
  );
};

export default StartButton;
