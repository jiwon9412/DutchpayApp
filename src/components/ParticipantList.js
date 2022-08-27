import React from "react";
import "./ParticipantList.scss";

import ParticipantItem from "./ParticipantItem";

const ParticipantList = () => {
  return (
    <div className='participantList'>
      <div className='list-header'>
        <p>참여자 3명</p>
        <button>섞기</button>
      </div>
      <div className='list'>
        <ParticipantItem />
        <ParticipantItem />
        <ParticipantItem />
      </div>
    </div>
  );
};

export default ParticipantList;
