import React, { useState, useEffect } from "react";

const Timer = () => {
  const [minutes, setMinutes] = useState(15);
  const [tenSeconds, setTenSeconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setTenSeconds(0);
    setMinutes(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => {
          if (seconds === 0) {
            seconds = 9;
            if (tenSeconds === 0) {
              setTenSeconds(5);
              if (minutes > 0 && minutes <= 10) {
                setMinutes("0" + (minutes - 1));
              } else {
                setMinutes(minutes - 1);
              }
              return seconds;
            } else {
              setTenSeconds(tenSeconds - 1);
            }

            return seconds;
          }
          return seconds - 1;
        });
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    if (seconds === 0 && tenSeconds === 0 && minutes === "0" + 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="timer" onClick={() => toggle()}>
      {minutes}:{tenSeconds}
      {seconds}
    </div>
  );
};

export default Timer;
