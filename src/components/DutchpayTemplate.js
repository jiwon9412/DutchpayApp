import React from "react";
import "./DutchpayTemplate.scss";

const DutchpayTemplate = ({ children }) => {
  return (
    <div className='DutchpayTemplate'>
      <div className='content'>{children}</div>
    </div>
  );
};

export default DutchpayTemplate;
