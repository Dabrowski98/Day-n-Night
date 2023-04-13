const ROUTE = document.querySelector(".bg__sky--route");
const CLOCK_TIME = document.querySelector(".ui__clock--time");
const CLOCK_DATE = document.querySelector(".ui__clock--date");
const ROOT = document.documentElement;

//RANDOM STARTING NUMBER
let startingNumber = Math.floor(Math.random() * 2400);
ROOT.style.setProperty("--startingNumber", `-${startingNumber}s`);

//CLOCK
function updateTime() {
  var now = new Date();
  CLOCK_TIME.innerHTML = now.toLocaleTimeString();
  CLOCK_DATE.innerHTML = now.toLocaleDateString();
}
updateTime();
setInterval(updateTime, 1000);

//SLIDER
var sliderOutput = document.getElementById("ui__slider--output");
var slider = document.getElementById("cycleRange");
var landscape__route = document.getElementById("bg__sky--route-id");
let currentNumber = startingNumber;
slider.oninput = function () {
  sliderOutput.innerHTML = slider.value;
  ROUTE.classList.add("animation-off");
  ROUTE.style.animationDelay = `${-this.value / 100}s`;
  void ROUTE.offsetWidth;
  ROUTE.classList.remove("animation-off");
  slider.value = this.value;
  currentNumber = this.value;
};
function updateSlider() {
  slider.value = currentNumber % 2400;
  currentNumber = currentNumber % 2400;
  if (slider.matches(":active")) {
    ROUTE.style.animationPlayState = "paused";
    slider.setAttribute("max", "2399.9");
  } else {
    currentNumber = currentNumber + 1;
    ROUTE.style.animationPlayState = "running";
  }
}
updateSlider();
setInterval(updateSlider, 10);

ROUTE.style.animationDelay = `${-this.value}s`;
