import React, { useState, useEffect } from "react";
import "./QuizzyPlus.scss";

import { Link } from "react-router-dom";

import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import { lightBlue } from "@mui/material/colors";
import { alpha } from "@mui/material";

import { useDispatch } from "react-redux";
import { activatePlan, changePricing } from "../../actions/planActions";

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

  const [pricing, setPricing] = useState("monthly");

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

  useEffect(() => {
    dispatch(changePricing(pricing));
  }, [pricing]);

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
          <LightBlue
            size="medium"
            checked={pricing === "yearly"}
            onChange={(e) =>
              setPricing(e.target.checked ? "yearly" : "monthly")
            }
          />
          Yearly
        </div>
        <section className="plans">
          {plans.map((plan) => (
            <div className="flip">
              <div
                className="front"
                style={
                  pricing === "monthly"
                    ? { opacity: 1, transform: "rotateY(0deg)", zIndex: "5" }
                    : { transform: "rotateY(180deg)" }
                }
              >
                <div className="plan">
                  <h2>{plan.plan}</h2>
                  <div className="line" />
                  <div className="price">
                    <h1>${plan.priceMonthly}</h1>
                    <h3>/month</h3>
                  </div>
                  <Link to="/quizzyplus/purchase" onClick={() => buyPlan(plan)}>
                    Get Started
                  </Link>
                  <ul>
                    {plan.features.map((feature) => (
                      <li>
                        <img src="/images/bullet.svg" alt="bullet icon" />
                        <p>{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className="back"
                style={
                  pricing === "yearly"
                    ? { opacity: 1, transform: "rotateY(0deg)" }
                    : { transform: "rotateY(180deg)" }
                }
              >
                <div className="plan">
                  <h2>{plan.plan}</h2>
                  <div className="line" />
                  <div className="price">
                    <h1>${plan.priceYearly}</h1>
                    <h3>/year</h3>
                  </div>
                  <Link to="/quizzyplus/purchase" onClick={() => buyPlan(plan)}>
                    Get Started
                  </Link>
                  <ul>
                    {plan.features.map((feature) => (
                      <li>
                        <img src="/images/bullet.svg" alt="bullet icon" />
                        <p>{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className="features">
          <div className="right_text">
            <div className="left">
              <img
                src="/images/quizzyplus/features/grades.svg"
                alt="main graphic"
              />
            </div>
            <div className="right">
              <h3>Boost your grades with Overall Stats</h3>
              <div className="checks">
                <div className="check">
                  <img
                    src="/images/quizzyplus/features/check.svg"
                    alt="graphic of a check"
                  />
                  <p>
                    See what study methods other students are using to make the
                    most out of your learning
                  </p>
                </div>
                <div className="check">
                  <img
                    src="/images/quizzyplus/features/check.svg"
                    alt="graphic of a check"
                  />
                  <p>
                    Compare each set with how fast others learned their material
                    to get a glimpse of how fast you can master it
                  </p>
                </div>
                <div className="check">
                  <img
                    src="/images/quizzyplus/features/check.svg"
                    alt="graphic of a check"
                  />
                  <p>
                    Look through the average set views by each weekday to see
                    when people are usually studying each set
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="left_text">
            <div className="left">
              <h3>Enjoy an increased image limit of up to 250 MB</h3>
              <div className="checks">
                <div className="check">
                  <img
                    src="/images/quizzyplus/features/check.svg"
                    alt="graphic of a check"
                  />
                  <p>
                    With an increased image size, you have plenty of space to
                    upload any type of image that'll help you with studying
                  </p>
                </div>
                <div className="check">
                  <img
                    src="/images/quizzyplus/features/check.svg"
                    alt="graphic of a check"
                  />
                  <p>
                    With Quizzy+ Standard or Professional, you also get the
                    ability to make your profile picture a .gif, asserting your
                    dominance over those with still-image profile pictures.
                  </p>
                </div>
              </div>
            </div>
            <div className="right">
              <img
                src="/images/quizzyplus/features/imagelimit.svg"
                alt="main graphic"
              />
            </div>
          </div>
          <div className="right_text">
            <div className="left">
              <img
                src="/images/quizzyplus/features/noads.svg"
                alt="main graphic"
              />
            </div>
            <div className="right">
              <h3>Say goodbye to those pesky ads</h3>
              <div className="checks">
                <div className="check">
                  <img
                    src="/images/quizzyplus/features/check.svg"
                    alt="graphic of a check"
                  />
                  <p>
                    With Quizzy+, you can enjoy an ad-free study experience.
                    With zero distractions, you'll be able to focus on what
                    matters most -- your education.
                  </p>
                </div>
                <div className="check">
                  <img
                    src="/images/quizzyplus/features/check.svg"
                    alt="graphic of a check"
                  />
                  <p>Study well, knowing you're supporting us ❤️</p>
                </div>
              </div>
            </div>
          </div>
          <div className="left_text">
            <div className="left">
              <h3>Showcase your brand new Quizzy+ badge</h3>
              <div className="checks">
                <div className="check">
                  <img
                    src="/images/quizzyplus/features/check.svg"
                    alt="graphic of a check"
                  />
                  <p>
                    Flex your brand new Quizzy+ badge to your friends. You're a
                    part of the students who'll turn that A into an A+.
                  </p>
                </div>
                <div className="check">
                  <img
                    src="/images/quizzyplus/features/check.svg"
                    alt="graphic of a check"
                  />
                  <p>
                    Once you purchase Quizzy+ once, you'll receive a permanent
                    badge showing that you were a part of the A+ club.
                  </p>
                </div>
              </div>
            </div>
            <div className="right">
              <img
                src="/images/quizzyplus/features/showcase.svg"
                alt="main graphic"
              />
            </div>
          </div>
          <div className="right_text">
            <div className="left">
              <img
                src="/images/quizzyplus/features/charts.svg"
                alt="main graphic"
              />
            </div>
            <div className="right">
              <h3>More charts, more data</h3>
              <div className="checks">
                <div className="check">
                  <img
                    src="/images/quizzyplus/features/check.svg"
                    alt="graphic of a check"
                  />
                  <p>
                    See how you compare with other people who studied the same
                    set.
                  </p>
                </div>
                <div className="check">
                  <img
                    src="/images/quizzyplus/features/check.svg"
                    alt="graphic of a check"
                  />
                  <p>
                    See how you as an individual learn different sets, and find
                    out how you best learn.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h3 className="much_more">...and much more!</h3>
        </section>
        <section className="footer">
          <h2>
            That A+ is waiting. You just have to claim it. Let's get started.
          </h2>
        </section>
      </main>
    </div>
  );
}

export default QuizzyPlus;
