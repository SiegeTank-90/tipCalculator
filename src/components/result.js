import React from "react";

function Result(props) {

  return (
    <div className="TotalsContainer">
      <div className="resultTitleContainer">
        <h3 className="SectionHeader ResultTitle">{props.resultName}</h3>
        <h3 className="ResultSubTitle">/ person</h3>
      </div>
      <div className="Total">${props.Total}</div>
    </div>
  );
}

export default Result;
