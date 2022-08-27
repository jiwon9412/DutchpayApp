import React, { useCallback, useState } from "react";

import DutchpayTemplate from "./components/DutchpayTemplate";
import InputTotalPay from "./components/InputTotalPay";
import GuageBar from "./components/GuageBar";
import ParticipantList from "./components/ParticipantList";
import StartButton from "./components/StartButton";

const App = () => {
  const [buttonActive, setButtonActive] = useState(false);

  const changeTotalpay = useCallback((totalpay) => {
    console.log(totalpay);
    if (totalpay >= 1000) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
  }, []);

  return (
    <DutchpayTemplate>
      <InputTotalPay changeTotalpay={changeTotalpay} />
      <GuageBar />
      <ParticipantList />
      <StartButton buttonActive={buttonActive} />
    </DutchpayTemplate>
  );
};

export default App;
