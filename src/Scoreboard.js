import React from "react";
import Timer from "./Timer";

const Scoreboard = props => {
  return (
    <section className="scoreboard">
      <div className="topRow">
        <div className="home">
          <h2 className="home__name">{props.home}</h2>

          {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

          <div className="home__score">{props.homeScore}</div>
        </div>
        <Timer
          isActive={props.isActive}
          minutes={props.minutes}
          tenSeconds={props.tenSeconds}
          seconds={props.seconds}
          setMinutes={props.setMinutes}
          setTenSeconds={props.setTenSeconds}
          setSeconds={props.setSeconds}
        />
        <div className="away">
          <h2 className="away__name">{props.away}</h2>
          <div className="away__score">{props.awayScore}</div>
        </div>
      </div>
      <div className="bottomRow">
        <div className="down">
          <h3 className="down__title">Down</h3>
          <div className="down__value">{props.down}</div>
        </div>
        <div className="toGo">
          <h3 className="toGo__title">To Go</h3>
          <div className="toGo__value">7</div>
        </div>
        <div className="ballOn">
          <h3 className="ballOn__title">Ball on</h3>
          <div className="ballOn__value">21</div>
        </div>
        <div className="quarter">
          <h3 className="quarter__title">Quarter</h3>
          <div className="quarter__value">{props.quarter}</div>
        </div>
      </div>
    </section>
  );
};

export default Scoreboard;
