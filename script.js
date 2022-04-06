const dailybtn = document.querySelector(".dailybtn");
const weeklybtn = document.querySelector("weeklybtn");
const monthlybtn = document.querySelector("monthlybtn");
const daily = document.querySelector(".daily");
const yesterday = document.querySelector(".yesterday");
const weekly = document.querySelector(".weekly");
const lastweek = document.querySelector(".lastweek");
const monthly = docoument.querySelector(".monthly");
const lastmonth = document.querySelector(".lastmonth");

dailybtn.addEventListener("click", () => {
    daily.classList.add("clicked");
    yesterday.classList.add("clicked");

})

weeklybtn.addEventListener("click", () => {

})