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
  const [guage, setGuage] = useState("middle");
  const [maxValue, setMaxValue] = useState(0);
  const [minValue, setMinValue] = useState(0);

  /**전체 금액이 1000원이상이 되면 start버튼 활성화해주는 함수 */
  const changeTotalpay = useCallback((totalpay) => {
    console.log("totalpay : " + totalpay);
    if (totalpay >= 1000) {
      setButtonActive(true);
    } else {
      setButtonActive(false);
    }
    setTotalpay(totalpay);
  }, []);

  /**참여자 수를 받아와서 state세팅해주는 함수 */
  const getMemberCnt = useCallback((cnt) => {
    setMemberCnt(cnt);
  }, []);

  /**참여자 수나 전체 금액이 바뀌면 평균값을 구해주는 함수 */
  useEffect(() => {
    if (totalpay > 0 && memberCnt > 0) {
      setAvgpay(Math.floor(totalpay / memberCnt));
    }
  }, [memberCnt, totalpay]);

  /**더치페이 계산해주는 함수
   * 게이지 상태에 따라서 세가지 계산법이 존재
   */
  const calculateDutchPay = useCallback(() => {
    //console.log("guage : " + guage);
    if (memberCnt > 1) {
      let arrPay = [];
      if (guage === "start") {
        let avgTotalPay = Math.floor(totalpay / (memberCnt * 1000));
        let tempRest = totalpay % (memberCnt * 1000);
        let tempRest2 = 0;
        if (tempRest >= 1000) {
          tempRest2 = Math.floor(tempRest / memberCnt);
          tempRest = tempRest % memberCnt;
        }

        for (let i = 0; i < memberCnt; i++) {
          arrPay[i] = avgTotalPay * 1000 + tempRest2;
          if (i === memberCnt - 1) arrPay[i] += tempRest;
        }
        shuffle(arrPay);
        setArrayPay(arrPay);
      } else if (guage === "middle") {
        let minFirstPayRate = 1 / 2;
        let maxFirstPayRate = 3 / 5;
        let firstPay = makeRandom(minFirstPayRate, maxFirstPayRate) * totalpay;
        firstPay = Math.floor(firstPay / 100) * 100;
        console.log("firstPay : " + firstPay);
        let restPay = totalpay - firstPay;
        arrPay.push(firstPay);

        for (let i = 0; i < memberCnt - 2; i++) {
          let minPayRate = 1 / 2;
          let maxPayRate = 3 / 5;

          let tempPay = makeRandom(minPayRate, maxPayRate) * restPay;
          // console.log("restPay : " + restPay);
          // console.log("tempPay : " + tempPay);
          tempPay = Math.floor(tempPay / 100) * 100;
          arrPay.push(tempPay);
          restPay -= tempPay;
        }

        let lastPay = restPay;
        lastPay = Math.floor(lastPay / 100) * 100;
        arrPay.push(lastPay);

        const reducer = (acc, curr) => acc + curr;
        const arraySum = arrPay.reduce(reducer);
        let dummyPay = totalpay - arraySum;
        arrPay[0] += dummyPay;

        shuffle(arrPay);
        setArrayPay(arrPay);
      } else {
        let tempTotal = Math.floor(totalpay / 3000);
        let tempRest = totalpay - tempTotal * 1000;

        //console.log(tempTotal);
        //console.log(tempRest);

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
        shuffle(arrPay);
        setArrayPay(arrPay);
      }
    }
  }, [memberCnt, totalpay, guage]);

  useEffect(() => {
    setMaxValue(getMaxValue(arrayPay));
    setMinValue(getMinValue(arrayPay));
  }, [arrayPay]);

  const getGuage = (value) => {
    setGuage(value);
  };

  /**배열을 무작위로 섞어주는 함수 */
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const randomPosition = Math.floor(Math.random() * (i + 1));

      const temp = array[i];
      array[i] = array[randomPosition];
      array[randomPosition] = temp;
    }
  };

  /**지정한 범위 내에서 랜덤 배열을 만들어주는 함수 */
  const makeRandom = (min, max) => {
    let randomVal = Math.random() * (max - min) + min;
    return randomVal;
  };

  /** 배열에서 최댓값 return 하는 함수 */
  const getMaxValue = (arr) => {
    let maxValue = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= maxValue) maxValue = arr[i];
    }
    return maxValue;
  };

  /** 배열에서 최소값 return 하는 함수 */
  const getMinValue = (arr) => {
    let minValue = Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= minValue) minValue = arr[i];
    }
    return minValue;
  };

  return (
    <DutchpayTemplate>
      <InputTotalPay changeTotalpay={changeTotalpay} avgpay={avgpay} />
      <GuageBar getGuage={getGuage} />
      <ParticipantList
        getMemberCnt={getMemberCnt}
        arrayPay={arrayPay}
        max={maxValue}
        min={minValue}
      />
      <StartButton
        buttonActive={buttonActive}
        calculateDutchPay={calculateDutchPay}
      />
    </DutchpayTemplate>
  );
};

export default App;
