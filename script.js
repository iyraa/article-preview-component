const shareBtn = document.getElementById("share-btn");
const sharePopOut = document.querySelector(".share-pop-out");
const arrowDown = document.querySelector(".arrow-down");

// Add a click event listener to toggle appear class
shareBtn.addEventListener("click", () => {
  // Remove the attached class
  sharePopOut.classList.toggle("flex");
  arrowDown.classList.toggle("flex");
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 600) {
    sharePopOut.classList.remove("flex");
    arrowDown.classList.remove("flex");
  }
});

if (window.innerWidth <= 600) {
  document.getElementById("share-pop-out").classList.remove("flex");
}
