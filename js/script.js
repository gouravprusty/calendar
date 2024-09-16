const monthName = document.querySelector(".month");
const dayName = document.querySelector(".day");
const dateName = document.querySelector(".date");
const yearName = document.querySelector(".year");

const today = new Date();
const month = today.getMonth();
monthName.innerText = today.toLocaleString("en", {month:"long"});
dayName.innerText = today.toLocaleString("en", {weekday:"long"});
dateName.innerText = today.getDate();
yearName.innerText = today.getFullYear();