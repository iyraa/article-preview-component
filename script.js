const shareBtn = document.getElementById("share-btn");
const sharePopOut = document.querySelector(".share-pop-out");

// Add a click event listener to toggle appear class
shareBtn.addEventListener("click", () => {
  // Remove the attached class
  sharePopOut.classList.toggle("flex");
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 600) {
    sharePopOut.classList.remove("flex");
  }
});

if (window.innerWidth <= 600) {
  document.getElementById("share-pop-out").classList.remove("flex");
}
