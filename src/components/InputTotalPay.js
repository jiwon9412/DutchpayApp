import React from "react";
import "./InputTotalPay.scss";

const InputTotalPay = () => {
  return (
    <div className='totalpay'>
      <input placeholder='금액입력 (원)' />
      <p> 1000원 이상부터 입력가능</p>
    </div>
  );
};

export default InputTotalPay;
