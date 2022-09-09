import React, { useCallback, useEffect, useState } from "react";
import "./InputTotalPay.scss";

const InputTotalPay = ({ changeTotalpay, avgpay }) => {
  const [totalpay, setTotalpay] = useState("");

  const handleChange = useCallback((e) => {
    setTotalpay(e.target.value);
  }, []);

  useEffect(() => {
    changeTotalpay(totalpay);
  }, [totalpay]);

  return (
    <div className='totalpay'>
      <input
        placeholder='금액입력 (원)'
        value={totalpay}
        onChange={handleChange}
      />
      <p>
        {totalpay >= 1000
          ? `평균 값 : ${avgpay.toLocaleString()} 원`
          : "1000원 이상부터 입력가능"}
      </p>
    </div>
  );
};

export default InputTotalPay;
