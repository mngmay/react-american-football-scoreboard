import React from "react";

const Buttons = props => {
  return (
    <section className="buttons">
      <div className="homeButtons">
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <button
          className="homeButtons__touchdown"
          onClick={() => props.setHomeScore(props.homeScore + 7)}
        >
          Home Touchdown
        </button>
        <button
          className="homeButtons__fieldGoal"
          onClick={() => props.setHomeScore(props.homeScore + 3)}
        >
          Home Field Goal
        </button>
      </div>
      <div className="awayButtons">
        <button
          className="awayButtons__touchdown"
          onClick={() => props.setAwayScore(props.awayScore + 7)}
        >
          Away Touchdown
        </button>
        <button
          className="awayButtons__fieldGoal"
          onClick={() => props.setAwayScore(props.awayScore + 3)}
        >
          Away Field Goal
        </button>
      </div>
      <div className="gameButtons">
        <button
          className="downButton"
          onClick={() => {
            if (props.down < 4) {
              props.setDown(props.down + 1);
            }
          }}
        >
          Down
        </button>
        <button
          className="quarterButton"
          onClick={() => {
            if (props.quarter < 4) {
              props.setQuarter(props.quarter + 1);
            }
          }}
        >
          Quarter
        </button>
      </div>
      <div className="timerButtons">
        <button className="startButton" onClick={props.toggle}>
          Start Game
        </button>

        <button className="resetButton" onClick={props.reset}>
          Reset Timer
        </button>
      </div>
    </section>
  );
};

export default Buttons;
