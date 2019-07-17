import React, { useEffect } from "react";

const Timer = props => {
  const {
    isActive,
    seconds,
    setSeconds,
    minutes,
    setMinutes,
    tenSeconds,
    setTenSeconds
  } = props;

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
  });

  return (
    <div className="timer">
      {minutes}:{tenSeconds}
      {seconds}
    </div>
  );
};

export default Timer;
