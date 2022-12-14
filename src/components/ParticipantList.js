import React, { useCallback, useEffect, useState } from "react";
import "./ParticipantList.scss";

import ParticipantItem from "./ParticipantItem";

const ParticipantList = ({ getMemberCnt, arrayPay, max, min }) => {
  const [member, setMember] = useState("");
  const [memberList, setMemberList] = useState([]);

  const handleChange = (e) => {
    setMember(e.target.value);
  };

  const handleSubmit = useCallback(
    (e) => {
      const newList = [...memberList, member];
      //console.log(newList);
      setMemberList(newList);
      setMember("");
      e.preventDefault();
    },
    [member]
  );

  useEffect(() => {
    getMemberCnt(memberList.length);
  }, [memberList]);

  return (
    <div className='participantList'>
      <div className='list-header'>
        <p>참여자 {memberList.length}명</p>
        <form action='' className='addMember' onSubmit={handleSubmit}>
          <input
            placeholder='멤버 이름'
            value={member}
            onChange={handleChange}
          />
          <button type='submit'>추가</button>
        </form>
      </div>
      <div className='list'>
        {memberList.map((member, index) => (
          <ParticipantItem
            name={member}
            key={index}
            pay={arrayPay[index]}
            rank={
              arrayPay[index] === max
                ? "bomb"
                : arrayPay[index] === min
                ? "lucky"
                : "soso"
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ParticipantList;
