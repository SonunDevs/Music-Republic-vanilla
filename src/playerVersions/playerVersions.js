let volumeContainer = document.querySelector(".volume_range_container");
let volumeIcon = document.querySelector(".slider i.fa-volume-up");
let volumeHoverState = false;

volumeIcon.addEventListener("mouseenter", () => {
  activation(true);
});

volumeContainer.addEventListener("mouseenter", () => {
  volumeHoverState = true;
  activation(true);
});

volumeIcon.addEventListener("mouseleave", () => {
  let timeOut = setTimeout(() => {
    clearTimeout(timeOut);
    if (volumeHoverState == false) {
      activation(false);
    }
  }, 1000);
});

volumeContainer.addEventListener("mouseleave", () => {
  activation(false);
  volumeHoverState = false;
});

function activation(status) {
  if (status) {
    volumeContainer.classList.add("active");
  } else {
    volumeContainer.classList.remove("active");
  }
}
