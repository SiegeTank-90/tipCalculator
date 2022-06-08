import React from "react";

function CustomTip(props) {
  var ActiveState = "CustomTipButton";
  var ActiveContainer = "CustomTipContainer";

  if (props.index === props.active) {
    ActiveState = "CustomTipButton-Active";
    ActiveContainer = "CustomTipContainer-Active";
  }

  function handleClick() {
    props.setIndex(props.index);
  }

  function handleValue(e) {
    props.setValue(e.target.value);
  }

  return (
    <div className={ActiveContainer}>
      <input
        type="number"
        className={ActiveState}
        placeholder="Custom"
        onClick={handleClick}
        onChange={handleValue}
      ></input>
    </div>
  );
}

export default CustomTip;
