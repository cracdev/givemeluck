import React from "react";

function Ball({ num }) {
  let formatedNumber = num;
  if (formatedNumber < 10) {
    formatedNumber = `0${num}`;
  }
  return <div className="Ball">{formatedNumber}</div>;
}
export default Ball;
