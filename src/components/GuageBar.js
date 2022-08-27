import React from "react";
import "./GuageBar.scss";

const GuageBar = () => {
  return (
    <div className='guagebarWrap'>
      <div className='degree'>아찔하게</div>
      <div className='guagebar'>
        <div className='middle'></div>
      </div>
    </div>
  );
};

export default GuageBar;
