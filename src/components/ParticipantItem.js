import React from "react";
import "./ParticipantItem.scss";

const ParticipantItem = ({ name, pay }) => {
  return (
    <div className='itemWrap'>
      <div className='icon'></div>
      <div className='name'>{name}</div>
      <div className='price'>{(pay && pay) || "???"}</div>
    </div>
  );
};

export default ParticipantItem;
