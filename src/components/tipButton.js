import React, { useState } from "react";

function TipButton(props) {
  var activeState = "BasicTipButton";

  if (props.index === props.active) {
    activeState = "BasicTipButton-Active";
  }

  function handleValue(e) {
    props.setValue(e.target.value);
    props.setIndex(props.index);
  }

  return (
    <div>
      <button className={activeState} value={props.value} onClick={handleValue}>
        {props.value}
      </button>
    </div>
  );
}

export default TipButton;
