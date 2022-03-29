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
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
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
