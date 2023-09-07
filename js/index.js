setInterval(() => {
  document.getElementById("time").innerHTML =
    new Date().getUTCHours() +
    ":" +
    new Date().getUTCMinutes() +
    ":" +
    new Date().getUTCSeconds();
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
