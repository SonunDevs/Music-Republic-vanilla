let fullPlayerBtn = document.querySelector(".fullplayer_btn");
let minimizeBtn = document.querySelector(".minimize_btn");
let player = document.querySelector("#player");

fullPlayerBtn.addEventListener("click", () => {
  playerChanging("full");
});

minimizeBtn.addEventListener("click", () => {
  playerChanging("standard");
});

function playerChanging(PlayerState) {
  if (PlayerState == "full") {
    player.classList.remove("player_standard");
    player.classList.add("player_full");
  } else if (PlayerState == "standard") {
    player.classList.remove("player_full");
    player.classList.add("player_standard");
  }
}
