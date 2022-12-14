import React, { useCallback, useState } from "react";
import "./GuageBar.scss";

const GuageBar = ({ getGuage }) => {
  const [startVisible, setStartVisible] = useState(false);
  const [middleVisible, setMiddleVisible] = useState(true);
  const [endVisible, setEndVisible] = useState(false);

  /**게이지 부분 클릭 시 이벤트 */
  const clickStart = (e) => {
    //console.log("start");
    setStartVisible(true);
    setMiddleVisible(false);
    setEndVisible(false);
    getGuage("start");
  };

  const clickMiddle = (e) => {
    //console.log("middle");
    setStartVisible(false);
    setMiddleVisible(true);
    setEndVisible(false);
    getGuage("middle");
  };

  const clickEnd = (e) => {
    //console.log("end");
    setStartVisible(false);
    setMiddleVisible(false);
    setEndVisible(true);
    getGuage("end");
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
