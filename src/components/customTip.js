import React, { useEffect, useState } from "react";

function CustomTip(props) {
  var ActiveState = "CustomTipButton";
  var ActiveContainer = "CustomTipContainer";
  const [CustomTip, setCustomTip] = useState("");

  useEffect(() => {
    if (props.index != props.active) {
      setCustomTip("");
    }
  }, [props.value]);

  if (props.index === props.active) {
    ActiveState = "CustomTipButton-Active";
    ActiveContainer = "CustomTipContainer-Active";
  }

  function handleClick() {
    props.setIndex(props.index);
  }

  function handleValue(e) {
    props.setValue(e.target.value);
    setCustomTip(e.target.value);
  }

  return (
    <div className={ActiveContainer}>
      <input
        type="number"
        className={ActiveState}
        placeholder="Custom"
        value={CustomTip}
        onClick={handleClick}
        onChange={handleValue}
      ></input>
    </div>
  );
}

export default CustomTip;
