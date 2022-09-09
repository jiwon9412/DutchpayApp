import React from "react";
import "./ParticipantItem.scss";

const ParticipantItem = ({ name, pay, rank }) => {
  return (
    <div className='itemWrap'>
      <div className={`icon ${rank}`}></div>
      <div className='name'>{name}</div>
      <div className='price'>
        {pay && Math.floor(pay).toLocaleString() + " 원"}
      </div>
    </div>
  );
};

export default ParticipantItem;
