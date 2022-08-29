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
  const [arrayPay, setArrayPay] = useState([]);

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

  // useEffect(() => {
  //   if (memberCnt > 1) {
  //     let tempTotal = totalpay / 1000;
  //     let tempRest = totalpay % 1000;
  //     let arrPay = [];
  //     let nextNum = 0;

  //     const firstPay = Math.floor(Math.random() * tempTotal);
  //     arrPay.push(firstPay * 1000);
  //     let maxNum = tempTotal - firstPay;

  //     for (let i = 1; i < memberCnt - 1; i++) {
  //       nextNum = Math.floor(Math.random() * maxNum);
  //       arrPay[i] = nextNum * 1000;
  //       maxNum -= nextNum;
  //       if (maxNum === 0) break;
  //     }
  //     arrPay.push(maxNum * 1000);

  //     let maxPay = 0;
  //     let maxIndex = 0;
  //     arrPay.map((pay, index) => {
  //       if (pay > maxPay) {
  //         maxIndex = index;
  //       }
  //     });

  //     arrPay[maxIndex] += tempRest;
  //     console.log("arrPay : " + arrPay);

  //     setArrayPay(arrPay);
  //     console.log("arrayPay : " + arrayPay);
  //   }
  // }, [memberCnt]);

  const calculateDutchPay = useCallback(() => {
    console.log("calculateDutchPay!!!!!!!!!!!!!!" + memberCnt);
    if (memberCnt > 1) {
      let tempTotal = totalpay / 1000;
      let tempRest = totalpay % 1000;
      let arrPay = [];
      let nextNum = 0;

      const firstPay = Math.floor(Math.random() * tempTotal);
      arrPay.push(firstPay * 1000);
      let maxNum = tempTotal - firstPay;

      for (let i = 1; i < memberCnt - 1; i++) {
        nextNum = Math.floor(Math.random() * maxNum);
        arrPay[i] = nextNum * 1000;
        maxNum -= nextNum;
        if (maxNum === 0) break;
      }
      arrPay.push(maxNum * 1000);

      let maxPay = 0;
      let maxIndex = 0;
      arrPay.map((pay, index) => {
        if (pay > maxPay) {
          maxIndex = index;
        }
      });

      arrPay[maxIndex] += tempRest;
      console.log("arrPay : " + arrPay);

      setArrayPay(arrPay);
      console.log("arrayPay : " + arrayPay);
    }
  }, [memberCnt, totalpay]);

  return (
    <DutchpayTemplate>
      <InputTotalPay changeTotalpay={changeTotalpay} avgpay={avgpay} />
      <GuageBar />
      <ParticipantList getMemberCnt={getMemberCnt} arrayPay={arrayPay} />
      <StartButton
        buttonActive={buttonActive}
        calculateDutchPay={calculateDutchPay}
      />
    </DutchpayTemplate>
  );
};

export default App;
