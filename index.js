// Get references to the elements by their data-testid attributes
const slackUserNameElement = document.querySelector(
  '[data-testid="aliyu idris"]'
);
const currentDayOfTheWeekElement = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
const currentUTCTimeElement = document.querySelector(
  '[data-testid="currentUTCTime"]'
);

// Function to update the current day of the week
function updateDayOfTheWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  currentDayOfTheWeekElement.textContent = dayOfWeek;
}

// Function to update the current UTC time
function updateUTCTime() {
  const currentDate = new Date();
  const utcTime = currentDate.toISOString().slice(11, 19); // Get HH:mm:ss from ISO string
  currentUTCTimeElement.textContent = utcTime + " UTC";
}

// Call the update functions initially
updateDayOfTheWeek();
updateUTCTime();

// Update the current day of the week and UTC time every second
setInterval(() => {
  updateDayOfTheWeek();
  updateUTCTime();
}, 1000);
