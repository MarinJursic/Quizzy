export const donutChartOne = {
  labels: ["Accounting Flashcards  ", "CALC101  "],
  data: [70, 30],
  bgColor: ["#E85871", "#8358E8"],
  textInside: "2 hours",
  rotate: 70,
  divider: 3,
};

export const donutChartTwo = {
  labels: ["Today's studying  ", "Remaining time  "],
  data: [70, 30],
  bgColor: ["#8358E8", "#363636"],
  textInside: "70%",
  rotate: 70,
  divider: 3,
};

export const verticalBarConfig = {
  labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
  data: [2, 4, 6, 4, 2, 4, 2],
  bgColor: [
    "#A27AFF",
    "#A27AFF",
    "#A27AFF",
    "#A27AFF",
    "#A27AFF",
    "#A27AFF",
    "#D2D2D2",
  ],
  hoverColor: [
    "#CDB8FF",
    "#CDB8FF",
    "#CDB8FF",
    "#CDB8FF",
    "#CDB8FF",
    "#CDB8FF",
    "#D2D2D2",
  ],
  max: 10,
  maxTicks: 6,
  barThickness: 0.55,
};
