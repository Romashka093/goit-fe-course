"use strict";
const refs = {
  startBtn: document.querySelector("button[data-action=start]"),
  stopBtn: document.querySelector("button[data-action=stop]")
};

const colors = [
  "#396362",
  "#4b8e8d",
  "#a7d7c5",
  "#f6c89f",
  "#ffe7d1",
  "#f9f8eb"
];

const randomIntegerFromInterval = max => {
  return Math.floor(Math.random() * (max + 1));
};

const setRandomColor = () => {
  const color = colors[randomIntegerFromInterval(colors.length - 1)];
  console.log(color);
  document.body.style.backgroundColor = color;
};

let interval = false;

refs.startBtn.addEventListener(
  "click",
  e =>
    (interval = interval ? interval : setInterval(() => setRandomColor(), 1000))
);

refs.stopBtn.addEventListener("click", e => clearInterval(interval));
