let timeout;
document.addEventListener('DOMContentLoaded', () => {
  const gamepad = document.querySelector(".gamepad");

  for (let i = 0; i < 16; i++) {
    gamepad.insertAdjacentHTML(
      "afterbegin",
      "<div class=\"cell number-${i}\"></div>"
    );
  }
  gamepad.setAttribute(
    "style",
    "grid-template-columns: repeat(4, 100px)"
  );
  const cell = document.querySelectorAll(".cell")

  let getRandom = () => Math.floor(Math.random() * cell.length)
  let lastTarget = getRandom()
  const appendActiveByIndex = (index) =>
    cell[index].classList.add("activeCell")
  const removeActiveByIndex = (index) =>
    cell[index].classList.remove("activeCell")

  const intervalHandler = () => {
    removeActiveByIndex(lastTarget)
    lastTarget = getRandom()
    appendActiveByIndex(lastTarget)
    timeout = setTimeout(intervalHandler, 1000)
  }

  timeout = setTimeout(intervalHandler, 1000)
})