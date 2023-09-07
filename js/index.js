setInterval(() => {
  document.getElementById("time").innerHTML = new Date.UTC().toLocaleTimeString();
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
