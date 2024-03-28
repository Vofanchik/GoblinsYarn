
document.addEventListener('DOMContentLoaded', () => {
  let timeout;
  let loose = 0;
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
  clickListener();
  function clickListener() {
  cell.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.classList.contains("activeCell")) {
        item.classList.remove("activeCell");
      }
      else {
        item.classList.remove("activeSell");
        loose += 1;

        if (loose == 5) {
          clearTimeout(timeout);
          document.body.innerHTML = '';
          document.write('Вы проиграли!');
        }
      }
    });
  });
}
})


