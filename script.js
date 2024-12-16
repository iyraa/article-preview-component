const shareBtn = document.getElementById("share-btn");
const sharePopUp = document.querySelector(".share-pop-up");
const profileSection = document.querySelector(".profile-section");
const shareSection = document.querySelector(".share-section");
const containerFooter = document.querySelector(".container-footer")

// Add a click event listener to toggle appear class
shareBtn.addEventListener("click", () => {
  
  if (window.innerWidth <= 550) {
    shareSection.classList.toggle("visible"); 
    profileSection.classList.toggle("hidden");
    containerFooter.classList.toggle("container-color");
  } else {
    sharePopUp.classList.toggle("flex");
  }
  
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 600) {
    sharePopUp.classList.remove("flex");
  }
});
