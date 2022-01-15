import React, { useState } from "react";
import "./Card.scss";

function Card({ card, selected, setSelected }) {
  const getLastFour = (str) => {
    return str.substring(str.length - 4, str.length);
  };

  const handleClick = () => {
    setSelected(!selected);
  };

  const stringifyNum = (num) => (num > 10 ? num : "0" + num);

  return (
    <div
      className="card"
      style={
        selected
          ? {
              boxShadow: "rgba(131, 88, 232, 0.5) 0px 3px 30px",
              border: "1px solid #8358e8",
            }
          : null
      }
      onClick={handleClick}
    >
      <img
        src={card.imgUrl}
        style={{ height: card.imgHeight || "1.5rem" }}
        alt="Icon of the card"
      />
      <h4>**** **** **** {getLastFour(card.number)}</h4>
      <p>
        Expires {stringifyNum(card.expMonth)}/{stringifyNum(card.expDate)}
      </p>
    </div>
  );
}

export default Card;
