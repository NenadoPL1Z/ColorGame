const board = document.querySelector("#board");
const SQUARES_NUMBER = 500;

const color = ["#c94238", "#3b56a8", "#eb771e", "#c4bc64", "lightblue", "#b048a2", "#40a367"];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mousemove", () => {
    setColor(square);
  });

  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });
  board.append(square);
}

function setColor(element) {
  element.style.backgroundColor = `${getColor()}`;
  element.style.boxShadow = `0 0 2px ${getColor()}, 0 0 10px ${getColor()}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getColor() {
  return color[Math.floor(Math.random() * color.length)];
}
