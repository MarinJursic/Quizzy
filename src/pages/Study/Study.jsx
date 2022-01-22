import React from "react";
import "./Study.scss";

import { Link } from "react-router-dom";

import { ScatterChart } from "../../components/ScatterChart/ScatterChart";
import { VerticalBarChart } from "../../components/VerticalBarChart/VerticalBarChart";
import { HorizontalBarChart } from "../../components/HorizontalBarChart/HorizontalBarChart";
import { SteppedLineChart } from "../../components/SteppedLineChart/SteppedLineChart";
import LineChart from "../../components/LineChart/LineChart";
import DoughnutChart from "../../components/DoughnutChart/DoughnutChart";
import TestProgress from "../../components/TestProgress/TestProgress";
import RecallProgress from "../../components/RecallProgress/RecallProgress";
import StudyCalendar from "../../components/StudyCalendar/StudyCalendar";
import FlipCard from "../../components/FlipCard/FlipCard";

import * as configs from "../../DATA/chart_configs/study.js";
import { studyData } from "../../DATA/page_data/study.js";

function Study() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = new Date().toLocaleString("en-US", {
    month: "long",
  });

  const addZero = (num) => (num > 10 ? num : "0" + num);

  const stringifyDate = (rawDate, includeYear = false, monthString = false) => {
    const date = new Date(rawDate);

    const day = addZero(date.getDate());
    const month = addZero(date.getMonth() + 1);
    const year = date.getFullYear();

    if (monthString) {
      return months[parseInt(date.getMonth())] + " " + day;
    }

    return `${month}/${day}${
      includeYear ? `/${year.toString().substr(2)}` : ""
    }`;
  };

  const formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes + " " + ampm;
  };

  return (
    <div className="study">
      <main>
        {/* Top Section */}
        <section className="top">
          <div className="left">
            <p>Study</p>
            <button className="purple">
              <img src="/images/study/flashcards.svg" alt="flashcards icon" />
              <p>Flashcards</p>
            </button>
            <button className="purple">
              <img src="/images/study/recall.svg" alt="recall icon" />
              <p>Recall</p>
            </button>
            <div className="coming_soon">
              <p>Coming Soon</p>
              <button>
                <img src="/images/study/quiz.svg" alt="quiz icon" />
                <p>Quiz</p>
              </button>
            </div>
          </div>
          <div className="right">
            <div className="top_bar">
              <p className="avg_mastery">
                Average Mastery Time: {studyData.avgMasteryTime} days
              </p>
              <div className="test_announcement">
                <p>Test on {stringifyDate(studyData.testDate, true)}</p>
                <img
                  className="small_pen"
                  src="/images/study/pen.svg"
                  alt="pen icon"
                />
              </div>
              <div className="title">
                <h3>{studyData.title}</h3>
                <img
                  className="big_pen"
                  src="/images/study/pen.svg"
                  alt="pen icon"
                />
              </div>
              <p>{studyData.termCount} terms</p>
              <div className="user">
                <img
                  className="pfp"
                  src="/images/user/pfp.svg"
                  alt="User icon"
                />
                <p>script_ing</p>
                <img src="/images/user/check.svg" alt="checkmark icon" />
              </div>
            </div>
            <div className="content">
              <FlipCard />
            </div>
          </div>
        </section>

        {/* Test Announcement Section */}
        <section className="test">
          <div className="title">
            <h4>
              Test coming up {stringifyDate(studyData.testDate, false, true)}
            </h4>
            <img src="/images/study/test/bell.svg" alt="bell icon" />
          </div>
          <TestProgress config={configs.testProgressConfig} />
          <div className="card">
            <div className="calendar">
              <StudyCalendar />
              <p>
                {studyData.recallDates.length + 1} Recall Sessions before your
                test!
              </p>
            </div>
            <div className="recall_sessions">
              <div className="title">
                <h5>Recall Sessions</h5>
                <button>+ Add Session</button>
              </div>
              <div className="content">
                <ul>
                  <li>
                    <img
                      src="/images/study/calendar/start.svg"
                      alt="Icon of bell"
                    />
                    {stringifyDate(studyData.studyStart, false, true)}
                  </li>
                  {studyData.recallDates.slice(0, 4).map((recallDate, i) => (
                    <li key={i}>
                      {" "}
                      <img
                        src="/images/study/calendar/recall.svg"
                        alt="Icon of bell"
                      />
                      {stringifyDate(recallDate, false, true)}
                    </li>
                  ))}
                  {studyData.recallDates.length > 4 && (
                    <li>
                      <img
                        src="/images/study/calendar/recall.svg"
                        alt="Icon of bell"
                      />
                      ...
                    </li>
                  )}
                  <li className="test_list_item">
                    {" "}
                    <img
                      src="/images/study/calendar/test.svg"
                      alt="Icon of bell"
                    />
                    {stringifyDate(studyData.testDate, false, true)}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* My Learning Section */}
        <section className="my_learning">
          <h4>My Learning</h4>

          {/* Pie Chart Cards */}

          <div className="pie_charts">
            <div className="distribution card">
              <h5>Study Time Distribution</h5>
              <DoughnutChart config={configs.doughnutConfigStudy} />
            </div>
            <div className="mastery card">
              <h5>Mastery Progress</h5>
              <DoughnutChart config={configs.doughnutConfigMastery} />
            </div>
          </div>

          {/*Recall Progress Chart Card */}

          <div className="recall_progress_chart card">
            <h5>Recall Progress Chart</h5>
            <SteppedLineChart config={configs.recallProgressFilledConfig} />
          </div>

          {/* Study Time Cards */}

          <div className="study_times">
            <div className="card study_history">
              <h5>Study History by Activity</h5>
              <div className="top">
                <div className="left">
                  <img src="/images/study/learning/sun.svg" alt="sun icon" />
                  <p>Activity</p>
                </div>
                <div className="right">
                  <img src="/images/study/learning/hash.svg" alt="hash icon" />
                </div>
              </div>
              <div className="content">
                <div className="bar">
                  <div className="left">
                    <img
                      src="/images/study/learning/flashcards.svg"
                      alt="flashcards icon"
                    />
                    <p>Flashcards</p>
                  </div>
                  <div className="right">
                    <p>2</p>
                  </div>
                </div>
                <div className="bar">
                  <div className="left">
                    <img
                      src="/images/study/learning/recall.svg"
                      alt="recall icon"
                    />
                    <p>Recall</p>
                  </div>
                  <div className="right">
                    <p>2</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card learning_time">
              <h5>Time Spent On Learning</h5>
              <LineChart width={800} height={320} />
            </div>
          </div>

          {/* Recall Progress Bar Card */}
          <div className="recall_progress_bar card">
            <h5>Recall Progress</h5>
            <RecallProgress config={configs.recallProgressBarConfig} />
            <p>
              Great job! {"You're"} almost done mastering this set! Only 25%
              left to go!
            </p>
          </div>

          {/* Most Difficult Card */}
          <div className="most_difficult card">
            <h5>Most Difficult Terms</h5>
            <div className="upgrade">
              <p>
                Upgrade to <span>Quizzy+</span>
                <br />
                for more features.
              </p>
              <Link to="/quizzyplus">
                <button>Get Quizzy+</button>
              </Link>
            </div>
          </div>

          {/* View History Card */}
          <div className="view_history card">
            <h5>Set View History</h5>
            <ScatterChart />
          </div>
        </section>

        {/* Overall Stats Section */}
        <section className="overall_stats">
          <div className="title">
            <h4>Overall Stats</h4>
            <h5 className="plus">PLUS</h5>
          </div>

          {/* Study Method Card */}
          <div className="study_method card">
            <h5>By Study Method</h5>
            <div className="chart">
              <div className="labels">
                <div className="label">
                  <img
                    src="/images/study/learning/flashcards.svg"
                    alt="icon of flashcards"
                  />
                  <h5>Flashcards</h5>
                </div>
                <div className="label">
                  <img
                    src="/images/study/learning/recall.svg"
                    alt="icon of recall"
                  />
                  <h5>Recall</h5>
                </div>
              </div>
              <div className="chart_canvas">
                <HorizontalBarChart />
              </div>
            </div>

            <p>
              Out of all the times this set has been studied, Flashcards has
              been the most popular method of studying.
            </p>
          </div>

          {/* Recall Progress Card */}
          <div className="recall_progress card">
            <h5>By Recall Progress</h5>
            <SteppedLineChart config={configs.recallProgressDashedConfig} />
          </div>

          {/* Average Set Views Card */}
          <div className="avg_views card">
            <h5>Average Set Views By Study Day</h5>
            <VerticalBarChart config={configs.verticalBarConfig} />
            <p>People tend to view this set on Mondays</p>
          </div>

          <h3>More features coming soon</h3>
          <p className="thanks_for_support">
            ❤️ Thanks for all of your support!
          </p>
        </section>
      </main>
      {/* Footer */}
      <footer className="footer">
        <p className="footer_title">Stats</p>
        <div className="stats">
          <div className="stat">
            <p>Total Set Views</p>
            <p>{studyData.views.toLocaleString("en-US")}</p>
          </div>
          <div className="stat">
            <p>Average Mastery Time</p>
            <p>{studyData.avgMasteryTime} days</p>
          </div>
          <div className="stat">
            <p>Creation Date</p>
            <p>
              {stringifyDate(studyData.creation, true)} @{" "}
              {formatAMPM(studyData.creation)}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Study;
