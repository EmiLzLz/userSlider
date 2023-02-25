import { getData } from "./data/apifetch.js";
import slider from "./js/usersSlider.js";
import showAditionalInfo from "./js/moreInfo.js";
import { animUserNext } from "./js/animations.js";
import { animUserPrev } from "./js/animations.js";

let currentUser = document.getElementById("current-user");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let age = document.getElementById("age");
let gender = document.getElementById("gender");
let cel = document.getElementById("cel");
let city = document.getElementById("city");
let country = document.getElementById("country");
let state = document.getElementById("state");
let addInfo = document.querySelector(".moreinfo");
let more = document.getElementById("more");
let count = 0;
const usersArr = [];
const ageArr = [];
const genderArr = [];
const celArr = [];
const cityArr = [];
const countryArr = [];
const stateArr = [];

getData().then((data) => {
  let users = data.results;

  slider(users, usersArr);

  showAditionalInfo(
    users,
    ageArr,
    genderArr,
    celArr,
    cityArr,
    countryArr,
    stateArr
  );

  currentUser.innerHTML = usersArr[count];
  age.innerHTML = ageArr[count];
  gender.innerHTML = genderArr[count];
  cel.innerHTML = celArr[count];
  city.innerHTML = cityArr[count];
  country.innerHTML = countryArr[count];
  state.innerHTML = stateArr[count];
});

next.addEventListener("click", () => {
  count = count + 1 >= usersArr.length ? count : count + 1;
  currentUser.innerHTML = usersArr[count];
  age.innerHTML = ageArr[count];
  gender.innerHTML = genderArr[count];
  cel.innerHTML = celArr[count];
  city.innerHTML = cityArr[count];
  country.innerHTML = countryArr[count];
  state.innerHTML = stateArr[count];
  animUserNext(currentUser);
});

prev.addEventListener("click", () => {
  count = count - 1 >= 0 ? count - 1 : count;
  currentUser.innerHTML = usersArr[count];
  age.innerHTML = ageArr[count];
  gender.innerHTML = genderArr[count];
  cel.innerHTML = celArr[count];
  city.innerHTML = cityArr[count];
  country.innerHTML = countryArr[count];
  state.innerHTML = stateArr[count];
  animUserPrev(currentUser);
});

more.addEventListener("click", () => {
  addInfo.classList.toggle("show");
});