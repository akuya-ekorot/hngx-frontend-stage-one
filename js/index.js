setInterval(() => {
  document.getElementById("time").innerHTML = Date.now();
}, 1);

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const date = new Date();
document.getElementById("day").innerHTML = days[date.getDay()];
