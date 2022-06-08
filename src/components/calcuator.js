import React, { useState } from "react";
import Dollar from "../images/icon-dollar.svg";
import Person from "../images/icon-person.svg";
import Result from "./result";
import ManualInputs from "./manualInputs";
import CustomTip from "./customTip";
import TipButton from "./tipButton";

function Calc() {
  const [Bill, setBill] = useState(0);
  const [People, setPeople] = useState(2);
  const [Tip, setTip] = useState(0);
  const [index, setIndex] = useState(0);
  const [FocusValue, setFocusValue] = useState(0);

  function TipCalculator() {
    if (Bill === 0) {
      return 0;
    }
    var TipTotal = (Bill * (Tip / 100)) / People;

    return Number.parseFloat(TipTotal).toFixed(2);
  }

  function TotalCalculator() {
    if (Bill === 0) {
      return 0;
    }

    var BillTotal = Bill / People + (Bill * (Tip / 100)) / People;

    return Number.parseFloat(BillTotal).toFixed(2);
  }

  function Reset() {
    setBill(0);
    setPeople(2);
    setTip(0);
    setIndex(0);
  }

  return (
    <div className="CalculatorContainer">
      <div className="OperatorContainer">
        <ManualInputs
          Title={"Bill"}
          Icon={Dollar}
          value={Bill}
          setValue={setBill}
          index={1}
          OnFocus={FocusValue}
          setFocus={setFocusValue}
        />
        <div className="TipButtonSection">
          <h3 className="SectionHeader CalcTitle">Select Tip %</h3>
          <div className="TipButtonContainer">
            <TipButton
              index={1}
              active={index}
              value={5}
              setValue={setTip}
              setIndex={setIndex}
            />
            <TipButton
              index={2}
              active={index}
              value={10}
              setValue={setTip}
              setIndex={setIndex}
            />
            <TipButton
              index={3}
              active={index}
              value={15}
              setValue={setTip}
              setIndex={setIndex}
            />
            <TipButton
              index={4}
              active={index}
              value={25}
              setValue={setTip}
              setIndex={setIndex}
            />
            <TipButton
              index={5}
              active={index}
              value={50}
              setValue={setTip}
              setIndex={setIndex}
            />
            <CustomTip
              active={index}
              index={6}
              setValue={setTip}
              setIndex={setIndex}
            />
          </div>
        </div>
        <ManualInputs
          Title={"Number of People"}
          value={People}
          Icon={Person}
          index={2}
          OnFocus={FocusValue}
          setFocus={setFocusValue}
          setValue={setPeople}
        />
      </div>
      <div className="ResultContainer">
        <div className="ResultBackground">
          <div className="ResultSeperator">
            <Result resultName={"Tip Amount"} Total={TipCalculator()} />
            <Result resultName={"Total"} Total={TotalCalculator()} />
          </div>
          <button onClick={Reset} className="ResetButton">
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calc;
