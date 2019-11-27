"use strict";
const refs = {
  Days: document.querySelector(".value[data-value=days"),
  Hours: document.querySelector(".value[data-value=hours"),
  Mins: document.querySelector(".value[data-value=mins"),
  Secs: document.querySelector(".value[data-value=secs")
};

window.onload = () => {
  new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("Dec 25, 2019")
  });

  function CountdownTimer(element) {
    setInterval(() => {
      const time = element.targetDate - new Date();
      const days = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(
        3,
        "0"
      );
      const hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
      // refs.textContent = `${days}:${hours}:${mins}:${secs}`;
      refs.Days.innerText = days;
      refs.Hours.innerText = hours;
      refs.Mins.innerText = mins;
      refs.Secs.innerText = secs;
    }, 1000);

    function pad(value) {
      return String(value).padStart(2, "0");
    }
  }
};
