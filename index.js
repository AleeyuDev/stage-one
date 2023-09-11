(function () {
  window.onload = function () {
    parent.iframeLoaded();
  };
})();

function getCurrentDay() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  return days[currentDay];
}

function getRealTimeData() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const milliseconds = String(now.getMilliseconds()).padStart(3, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function updateDataAttributes() {
  const currentDayElement = document.getElementById("currentDay");
  const realTimeDataElement = document.getElementById("currentTime");

  currentDayElement.textContent = getCurrentDay();
  realTimeDataElement.textContent = getRealTimeData();
}

setInterval(updateDataAttributes, 1);
