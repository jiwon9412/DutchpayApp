import React from "react";

import DutchpayTemplate from "./components/DutchpayTemplate";
import InputTotalPay from "./components/InputTotalPay";
import GuageBar from "./components/GuageBar";
import ParticipantList from "./components/ParticipantList";
import StartButton from "./components/StartButton";

const App = () => {
  return (
    <DutchpayTemplate>
      <InputTotalPay />
      <GuageBar />
      <ParticipantList />
      <StartButton />
    </DutchpayTemplate>
  );
};

export default App;
