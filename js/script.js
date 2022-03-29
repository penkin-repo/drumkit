playSound = (e) => {
  // all sounds stop
  if (e.keyCode === 81) {
    const allAudio = document.querySelectorAll("audio");
    allAudio.forEach((element) => {
      element.pause();
      element.currentTime = 0;
    });
    return;
  }

  //   play instrument

  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.btn[data-key="${e.keyCode}"]`);
  const label = document.querySelector(`.item__label[data-key="${e.keyCode}"]`);
  if (!audio) return;

  if (audio.duration > 0 && !audio.paused) {
    audio.pause();
    audio.currentTime = 0;
    label.classList.remove("playing-inst");
  } else {
    audio.currentTime = 0;
    audio.play();
    label.classList.add("playing-inst");
  }

  key.classList.add("playing");
};

//remove transition
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".btn");
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});

window.addEventListener("keydown", playSound);

// play on mouse click
const btnsEl = document.querySelectorAll(".btn");
const func = (e) => {
  event = e.target;
  let keyClick;
  if (event.parentNode.classList[0] === "music-ins") {
    keyClick = event.parentNode.parentNode.getAttribute("data-key");
  } else {
    keyClick = event.parentNode.getAttribute("data-key");
  }

  const audio = document.querySelector(`audio[data-key="${keyClick}"]`);
  const key = document.querySelector(`.btn[data-key="${keyClick}"]`);
  const label = document.querySelector(`.item__label[data-key="${keyClick}"]`);
  if (!audio) return;

  if (audio.duration > 0 && !audio.paused) {
    audio.pause();
    audio.currentTime = 0;
    label.classList.remove("playing-inst");
  } else {
    audio.currentTime = 0;
    audio.play();
    label.classList.add("playing-inst");
  }

  key.classList.add("playing");
};
btnsEl.forEach((element) => {
  element.addEventListener("click", func);
});
