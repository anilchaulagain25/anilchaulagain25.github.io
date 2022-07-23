"use strict";

let textAreaElement,
  animationTypeSelectElement,
  sizeTypeSelectElement,
  turboCheckElement,
  startButtonElement,
  stopButtonElement,
  setTimeOutFn;

const loadTextArea = function (type, speeed, size) {
  textAreaElement.style.fontSize = size;
  const frames = ANIMATIONS[type].split("=====\n");
  let index = 0;
  (function doAnimation() {
    textAreaElement.value = frames[index++];
    if (index == frames.length) {
      index = 0;
    }
    setTimeOutFn = setTimeout(doAnimation, speeed);
  })();
  startButtonElement.disabled = true;
  stopButtonElement.disabled = false;
};
const resetTextArea = function () {
  textAreaElement.value = "";
  clearTimeout(setTimeOutFn);
  startButtonElement.disabled = false;
  stopButtonElement.disabled = true;
};

window.onload = function () {
  textAreaElement = document.getElementById("text-area");
  animationTypeSelectElement = document.getElementById("animation");
  sizeTypeSelectElement = document.getElementById("fontsize");
  turboCheckElement = document.getElementById("turbo");
  startButtonElement = document.getElementById("start");
  stopButtonElement = document.getElementById("stop");
  startButtonElement.addEventListener("click", function () {
    loadTextArea(
      animationTypeSelectElement.value,
      turboCheckElement.checked ? 50 : 250,
      sizeTypeSelectElement.value
    );
  });
  stopButtonElement.addEventListener("click", resetTextArea);
};
