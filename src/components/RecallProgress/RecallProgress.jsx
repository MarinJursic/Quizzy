import React from "react";
import "./RecallProgress.scss";

export default function RecallProgress({ config }) {
  return (
    <div className="recall_progress">
      <div className="bar_w_borders">
        <div className="border" />
        <div className="bar">
          <div className="bg"></div>
          {Object.keys(config.colors).map((color, i) => {
            const percentage = config.colors[color];

            const boxShadow = `0 0 10px ${color}`;
            const width = `${percentage || 0}%`;

            return (
              <div
                className="bar_completed"
                style={{
                  width,
                  backgroundColor: color,
                  boxShadow,
                }}
              ></div>
            );
          })}
        </div>
        <div className="border" />
      </div>
      <div className="labels">
        <div className="label label_0">
          <p>0%</p>
        </div>
        <div className="label label_25">
          <p>25%</p>
        </div>
        <div className="label label_50">
          <p>50%</p>
        </div>
        <div className="label label_75">
          <p>75%</p>
        </div>
        <div className="label label_100">
          <p>100%</p>
        </div>
      </div>
    </div>
  );
}
