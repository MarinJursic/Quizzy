import React from "react";
import "./FlipCard.scss";

function FlipCard() {
  return (
    <div className="flip">
      <div className="front">
        <h4>Accounting Cycle</h4>
      </div>
      <div className="back">
        <p>
          The accounting cycle is a collective process of identifying,
          analyzing, and recording the accounting events of a company. It is a
          standard 8-step process that begins when a transaction occurs and ends
          with its inclusion in the financial statements.
        </p>
      </div>
    </div>
  );
}

export default FlipCard;
