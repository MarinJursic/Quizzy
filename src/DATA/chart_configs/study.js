export const recallProgressFilledConfig = {
  dashTitle: "Quizzy's Smart Projection",
  dashData: [NaN, 25, 38, 50, 57, 62, 75, 100],
  fillTitle: "Your Learning",
  fillData: [0, 25],
  labels: ["", "11/18", "11/19", "11/20", "11/21", "11/22", "11/23", "11/24"],
};

export const recallProgressDashedConfig = {
  dashTitle: "Average Recall Progress",
  dashData: [0, 25, 38, 50, 57, 62, 75, 100],
  labels: ["", "Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
};

export const verticalBarConfig = {
  labels: ["", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
  data: [0, 200, 50, 100, 20, 0, 60, 80],
  gradientStart: "#4C72E6",
  gradientEnd: "#8358E8",
  max: 300,
  maxTicks: 8,
  barThickness: 0.9,
};

export const doughnutConfigStudy = {
  labels: ["Recall Sessions", "Flashcards"],
  data: [50, 50],
  bgColor: ["#E85871", "#8358E8"],
  textInside: "2 hours",
  rotate: -45,
  divider: 2.6,
};

export const doughnutConfigMastery = {
  labels: ["Mastery Progress", "NaN"],
  data: [50, 50],
  bgColor: ["#8358E8", "#363636"],
  textInside: "50%",
  rotate: -45,
  mastery: true,
  divider: 2.6,
};

export const testProgressConfig = {
  startDate: new Date(2022, 0, 18),
  startLabel: "Started studying",
  endDate: new Date(2022, 0, 25),
  endLabel: "Test Date",
};

/*   
      RULES FOR RECALL PROGRESS BAR CONFIG!

      1. Colors HAVE to be in order from highest percentage to lowest
      2. You cannot have duplicate colors

  */
export const recallProgressBarConfig = {
  colors: { "#B9A2EE": 75, "#6D4BBB": 50, "#4B3384": 25 },
};
