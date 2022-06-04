const game = new Game(
  document.querySelectorAll("ul li"),
  document.getElementById("audience-btn"),
  document.getElementById("tlf-btn"),
  document.getElementById("divide-btn"),
  document.querySelector(".question"),
  document.querySelectorAll(".answers a")
);

game.start();
