import React, { useState, useEffect } from "react";
import "./StudyCalendar.scss";

import { studyData } from "../../DATA/page_data/study.js";

function StudyCalendar() {
  const [displayDates, setDisplayDates] = useState([]);
  const [previousDates, setPreviousDates] = useState([]);
  const [newRowIndex, setNewRowIndex] = useState([6, 13, 20, 27, 34]);
  const [todayIndex, setTodayIndex] = useState();

  let months = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
  };

  let month = new Date().toLocaleString("en-US", {
    month: "long",
  });
  const year = new Date().getFullYear();
  month = "February";
  const day = new Date(`${month} 1, ${year}`).getDay();
  const today = new Date().getDate();
  let tempDates = [];

  const calculateCalendar = () => {
    if ((0 === year % 4 && 0 !== year % 100) || 0 === year % 400) {
      months["February"] = 29;
    }

    const keys = Object.keys(months);
    const index = keys.indexOf(month);

    let previousMonth = "";
    if (month === "January") {
      previousMonth = "December";
    } else {
      previousMonth = keys[index - 1];
    }

    for (
      let i = months[previousMonth] - day + 1;
      i <= months[previousMonth];
      i++
    ) {
      tempDates.push(i);
      setPreviousDates((previousDates) => [...previousDates, i]);
    }

    const remaining = 35 - displayDates.length;
    let j = 1;
    while (j <= remaining && j <= months[month]) {
      // eslint-disable-next-line no-loop-func
      tempDates.push(j);
      j++;
    }

    setTodayIndex(tempDates.indexOf(today));

    setDisplayDates(tempDates);
  };

  const getBellIcon = (d, newIndex) => {
    const keys = Object.keys(months);
    const indexMonth = keys.indexOf(month);

    let previousMonth = "";
    if (month === "January") {
      previousMonth = "December";
    } else {
      previousMonth = keys[indexMonth - 1];
    }

    const currMonth =
      newIndex < displayDates.length - months[month]
        ? keys.indexOf(previousMonth)
        : keys.indexOf(month);

    const currYear =
      currMonth === "December" && month === "January" ? year - 1 : year;

    const currDate = new Date(currYear, currMonth, d);

    const isStart = currDate.getTime() === studyData.studyStart.getTime();

    const isEnd = currDate.getTime() === studyData.testDate.getTime();

    const isRecall = studyData.recallDates.some(
      (date) => currDate.getTime() === date.getTime()
    );

    let bellIcon = null;

    if (isStart) {
      bellIcon = "start";
    } else if (isRecall) {
      bellIcon = "recall";
    } else if (isEnd) {
      bellIcon = "test";
    }

    return bellIcon;
  };

  useEffect(() => {
    calculateCalendar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (displayDates.length > 20) {
      if (displayDates.length < 34) {
        setNewRowIndex([6, 13, 20, 27, displayDates.length - 1]);
      } else {
        setNewRowIndex([6, 13, 20, 27, 34, displayDates.length - 1]);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayDates]);

  return (
    <div className="calendarBox">
      <h2>
        {month} {year}
      </h2>
      <table>
        <thead>
          <tr>
            <th>S</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th>
            <th>F</th>
            <th>S</th>
          </tr>
        </thead>

        <tbody className="body">
          {displayDates.map((date, index) => {
            const rowIndexOf = newRowIndex.indexOf(index);

            const lastRow =
              rowIndexOf === -1 || rowIndexOf === 0
                ? -1
                : newRowIndex[rowIndexOf - 1];

            return (
              <>
                {newRowIndex.includes(index) && (
                  <tr
                    cellspacing="0"
                    cellpadding="0"
                    className={
                      todayIndex < newRowIndex[newRowIndex.indexOf(index)] &&
                      todayIndex < newRowIndex[newRowIndex.indexOf(index) + 1]
                        ? "current"
                        : null
                    }
                  >
                    {displayDates.map((d, newIndex) => {
                      const bellIcon = getBellIcon(d, newIndex);

                      return (
                        <>
                          {newIndex <= index && newIndex > lastRow && (
                            <th
                              className={bellIcon ? "bell" : "day"}
                              style={
                                newIndex < previousDates.length
                                  ? { color: "#CECECE" }
                                  : null
                              }
                            >
                              {bellIcon !== null ? (
                                <img
                                  src={`/images/study/calendar/${bellIcon}.svg`}
                                  alt="Icon of bell"
                                />
                              ) : (
                                d
                              )}
                            </th>
                          )}
                        </>
                      );
                    })}
                  </tr>
                )}
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StudyCalendar;
