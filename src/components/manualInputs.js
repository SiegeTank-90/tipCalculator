import React from "react";

function ManualInputs(props) {
  var hidden = "hidden";
  var RedBorder = "";
  var GreenBorder = "";

  if (props.value == 0) {
    hidden = "";
    RedBorder = "RedBorder";
  }
  if (props.index == props.OnFocus) {
    GreenBorder = "GreenBorder";
  }

  function handleFocus() {
    if (props.index == props.OnFocus) {
        props.setFocus(0)

   
    } else props.setFocus(props.index)
  }

  function handleValue(e) {
    props.setValue(e.target.value);
  }

  function handleClick() {
      props.setValue('')
  }

  return (
    <div className="InputContainer">
      <div>
        <h3 className="SectionHeader CalcTitle">{props.Title}</h3>
        <h3 className={"SectionHeader CalcWarning " + hidden}>Cant Be Zero</h3>
        <div
          className={GreenBorder +  " inputValueContainer " + RedBorder}
        >
          <img className="icon" src={props.Icon} />
          <input
            className="InputNumber"
            type="number"
            value={props.value}
            onFocus={handleFocus}
            onBlur={handleFocus}
            onClick={handleClick}
            onChange={handleValue}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default ManualInputs;
