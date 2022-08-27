import React from "react";
import "./ParticipantItem.scss";

const ParticipantItem = ({ name }) => {
  return (
    <div className='itemWrap'>
      <div className='icon'></div>
      <div className='name'>{name}</div>
      <div className='price'>???</div>
    </div>
  );
};

export default ParticipantItem;
