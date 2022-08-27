import React from "react";
import "./ParticipantItem.scss";

const ParticipantItem = () => {
  return (
    <div className='itemWrap'>
      <div className='photo'></div>
      <div className='name'>전석영</div>
      <div className='price'>5,000</div>
    </div>
  );
};

export default ParticipantItem;
