import React from "react";
import "./StartButton.scss";

const StartButton = ({ buttonActive, calculateDutchPay }) => {
  const handleClick = () => {
    calculateDutchPay();
  };

  return (
    <div className='startButton'>
      <button disabled={!buttonActive} onClick={handleClick}>
        μμνκΈ°
      </button>
    </div>
  );
};

export default StartButton;
