import React, { useState} from "react";

function CustomTip(props) {
  var ActiveState = "CustomTipButton";
  var ActiveContainer = "CustomTipContainer";
  const [ CustomTip, setCustomTip] = useState('')

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
  function handleBlur() {
    setCustomTip('')
  }

  return (
    <div className={ActiveContainer}>
      <input
        type="number"
        className={ActiveState}
        placeholder="Custom"
        value={CustomTip}
        onBlur={handleBlur}
        onClick={handleClick}
        onChange={handleValue}
      ></input>
    </div>
  );
}

export default CustomTip;
