import React from "react";

const BottomButtons = props => {
  return (
    <section className="buttons">
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

      {/* <button className="startButton" onClick={() => toggle()}>
        Start Game
      </button> */}
    </section>
  );
};

export default BottomButtons;
