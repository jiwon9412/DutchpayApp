import React, { useCallback, useEffect, useState } from "react";

import DutchpayTemplate from "./components/DutchpayTemplate";
import InputTotalPay from "./components/InputTotalPay";
import GuageBar from "./components/GuageBar";
import ParticipantList from "./components/ParticipantList";
import StartButton from "./components/StartButton";

const App = () => {
  const [buttonActive, setButtonActive] = useState(false);
  const [avgpay, setAvgpay] = useState(0);
  const [memberCnt, setMemberCnt] = useState(0);
  const [totalpay, setTotalpay] = useState(0);

  const changeTotalpay = useCallback((totalpay) => {
    console.log("totalpay : " + totalpay);
    if (totalpay >= 1000) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
    setTotalpay(totalpay);
  }, []);

  const getMemberCnt = useCallback((cnt) => {
    setMemberCnt(cnt);
  }, []);

  useEffect(() => {
    if (totalpay > 0 && memberCnt > 0) {
      setAvgpay(totalpay / memberCnt);
    }
  }, [memberCnt, totalpay]);

  return (
    <DutchpayTemplate>
      <InputTotalPay changeTotalpay={changeTotalpay} avgpay={avgpay} />
      <GuageBar />
      <ParticipantList getMemberCnt={getMemberCnt} />
      <StartButton buttonActive={buttonActive} />
    </DutchpayTemplate>
  );
};

export default App;
