//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import Scoreboard from "./Scoreboard";
import Buttons from "./Buttons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarter, setQuarter] = useState(1);
  const [down, setDown] = useState(0);
  const [minutes, setMinutes] = useState(15);
  const [tenSeconds, setTenSeconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setActive] = useState(false);

  function toggle() {
    setActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setTenSeconds(0);
    setMinutes(15);
    setActive(false);
  }

  return (
    <div className="container">
      <Scoreboard
        home="Lions"
        away="Tigers"
        homeScore={homeScore}
        awayScore={awayScore}
        quarter={quarter}
        down={down}
        minutes={minutes}
        tenSeconds={tenSeconds}
        seconds={seconds}
        setMinutes={setMinutes}
        setTenSeconds={setTenSeconds}
        setSeconds={setSeconds}
        isActive={isActive}
      />
      <Buttons
        homeScore={homeScore}
        awayScore={awayScore}
        setHomeScore={setHomeScore}
        setAwayScore={setAwayScore}
        quarter={quarter}
        setQuarter={setQuarter}
        down={down}
        setDown={setDown}
        toggle={event => toggle(event)}
        reset={event => reset(event)}
      />
    </div>
  );
}

export default App;
