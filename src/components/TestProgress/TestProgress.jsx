import React, { useState, useEffect } from "react";
import "./TestProgress.scss";

export default function TestProgress({ config }) {
  const [progress, setProgress] = useState(0);

  const calculatePercentage = () => {
    const start = new Date(config.startDate);
    const end = new Date(config.endDate);
    const today = new Date();

    const duration = Math.abs(end - start);
    const progressed = Math.abs(today - start);

    const percentage = Math.round((progressed / duration) * 100);

    setProgress(Math.min(Math.max(percentage, 0), 100));
  };

  const addZero = (num) => (num > 10 ? num : "0" + num);

  const stringifyDate = (rawDate) => {
    const date = new Date(rawDate);

    const day = addZero(date.getDate());
    const month = addZero(date.getMonth() + 1);
    const year = date.getFullYear();

    return `${month}/${day}`;
  };

  useEffect(() => {
    calculatePercentage();
  }, []);

  return (
    <div className="test_progress">
      <div className="bar_w_borders">
        <div className="border" />
        <div className="bar">
          <div className="bg"></div>
          <div
            className="bar_completed"
            style={{
              width: `${progress}%`,
              borderRadius: progress === 100 ? "0" : "0 0.5rem 0.5rem 0",
            }}
          ></div>
        </div>
        <div className="border" />
      </div>
      <div className="labels">
        <div className="label start">
          <p>{stringifyDate(config.startDate)}</p>
          <p className="small">{config.startLabel}</p>
        </div>
        <div className="label mid">
          <p>{stringifyDate(new Date())}</p>
          <p className="small">Today</p>
        </div>
        <div className="label end">
          <p>{stringifyDate(config.endDate)}</p>
          <p className="small">{config.endLabel}</p>
        </div>
      </div>
    </div>
  );
}
