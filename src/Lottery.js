import React, { useState } from "react";
import Ball from "./Ball";
import "./lottery.css";
import "./Ball.css";

function Lottery() {
  const title = "Lotto";
  const maxBalls = 3;
  const maxNum = 99;
  const [state, setState] = useState({
    nums: Array.from({ length: maxBalls })
  });

  const random = () => {
    setState((curState) => ({
      nums: curState.nums.map((n) => Math.floor(Math.random() * maxNum) + 1)
    }));
  };

  return (
    <div className="Lottery">
      <h2>{title}</h2>
      {state.nums.map((n) => (
        <Ball num={n} />
      ))}
      <div className="actionBtn">
        <button onClick={random}>Show me!!</button>
      </div>
    </div>
  );
}

export default Lottery;
