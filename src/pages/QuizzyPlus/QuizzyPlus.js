import React, { useState } from "react";
import "./QuizzyPlus.scss";

import { Link } from "react-router-dom";

import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { lightBlue } from "@mui/material/colors";
import { alpha } from "@mui/material";

import { useDispatch } from "react-redux";
import { activatePlan } from "../../actions/planActions";

function QuizzyPlus() {
  const dispatch = useDispatch();

  const LightBlue = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: lightBlue[300],
      "&:hover": {
        backgroundColor: alpha(
          lightBlue[300],
          theme.palette.action.hoverOpacity
        ),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: lightBlue[300],
    },
  }));

  const [plans] = useState([
    {
      plan: "BASIC",
      priceMonthly: "7.99",
      priceYearly: "79.99",
      features: [
        "No ads",
        "Quizzy's Smart Projection",
        "Most Difficult Terms",
        "More Games",
        "Quizzy+ Badge",
        "20MB Image Upload Size",
        "Detailed Study Analytics",
        "Themes",
        "Offline Access",
        "Priority Support",
        "Custom Diagrams",
        "Custom Audio",
      ],
    },
    {
      plan: "STANDARD",
      priceMonthly: "12.99",
      priceYearly: "95.99",
      features: [
        "No ads",
        "Quizzy's Smart Projection",
        "Most Difficult Terms",
        "Monthly Streak Repair",
        "More Games",
        "Quizzy+ Badge",
        "50MB Image Upload Size",
        "Detailed Study Analytics",
        "Themes",
        "Offline Access",
        "Priority Support",
        "Custom Diagrams",
        "Custom Audio",
        "Spotify Integration",
        "Animated Avatars",
        "Pomodoro Timer",
      ],
    },
    {
      plan: "PROFESSIONAL",
      priceMonthly: "15.99",
      priceYearly: "120.99",
      features: [
        "No ads",
        "Quizzy's Smart Projection",
        "Most Difficult Terms",
        "Monthly Streak Repair",
        "More Games",
        "Quizzy+ Badge",
        "250MB Image Upload Size",
        "Detailed Study Analytics",
        "Themes",
        "Offline Access",
        "Priority Support",
        "Custom Diagrams",
        "Custom Audio",
        "Spotify Integration",
        "Animated Avatars",
        "Pomodoro Timer",
        "Scan to Create Sets",
        "Overall Stats for ALL sets",
        "Automatic Entry into the Beta Program",
      ],
    },
  ]);

  const buyPlan = (plan) => {
    dispatch(activatePlan(plan));
  };

  return (
    <div className="quizzyplus">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="2221.102"
        height="737.996"
        viewBox="0 0 2221.102 737.996"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="0.5"
            x2="0.5"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#4c72e6" />
            <stop offset="1" stop-color="#8358e8" />
          </linearGradient>
          <filter
            id="Path_131"
            x="0"
            y="0"
            width="2221.102"
            height="737.996"
            filterUnits="userSpaceOnUse"
          >
            <feOffset input="SourceAlpha" />
            <feGaussianBlur stdDeviation="12.5" result="blur" />
            <feFlood flood-opacity="0.549" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_131)">
          <path
            id="Path_131-2"
            data-name="Path 131"
            d="M-1656.79,6989.424s745.126,121.9,1059.316,115.031S489.311,6989.424,489.311,6989.424s-188.857-547.686-202.592-547.686-1943.51,103.013-1943.51,103.013Z"
            transform="translate(1694.29 -6404.24)"
            fill="url(#linear-gradient)"
          />
        </g>
      </svg>
      <main>
        <h1>Quizzy+</h1>
        <h6>Script, forget the A. You're going to get an A+.</h6>
        <div className="switch">
          Monthly
          <LightBlue size="medium" />
          Yearly
        </div>
        <section>
          {plans.map((plan) => (
            <div className="plan">
              <h2>{plan.plan}</h2>
              <div className="line" />
              <div className="price">
                <h1>${plan.priceMonthly}</h1>
                <h3>/month</h3>
              </div>
              <Link to="/purchase" onClick={() => buyPlan(plan)}>
                Get Started
              </Link>
              <ul>
                {plan.features.map((feature) => (
                  <li>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default QuizzyPlus;
