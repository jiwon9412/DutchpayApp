import React, { useCallback, useState } from "react";
import "./GuageBar.scss";

const GuageBar = () => {
  const [startVisible, setStartVisible] = useState(false);
  const [middleVisible, setMiddleVisible] = useState(true);
  const [endVisible, setEndVisible] = useState(false);

  const clickStart = (e) => {
    console.log("start");
    setStartVisible(true);
    setMiddleVisible(false);
    setEndVisible(false);
  };

  const clickMiddle = (e) => {
    console.log("middle");
    setStartVisible(false);
    setMiddleVisible(true);
    setEndVisible(false);
  };

  const clickEnd = (e) => {
    console.log("end");
    setStartVisible(false);
    setMiddleVisible(false);
    setEndVisible(true);
  };

  return (
    <div className='guagebarWrap'>
      <div className='degree'>
        {(startVisible && "적당히") ||
          (middleVisible && "아찔하게") ||
          (endVisible && "무자비하게")}
      </div>
      <div className='guagebar'>
        <div
          className={"start" + (startVisible ? " visible" : "")}
          onClick={clickStart}
        ></div>
        <div
          className={"middle" + (middleVisible ? " visible" : "")}
          onClick={clickMiddle}
        ></div>
        <div
          className={"end" + (endVisible ? " visible" : "")}
          onClick={clickEnd}
        ></div>
      </div>
    </div>
  );
};

export default GuageBar;
