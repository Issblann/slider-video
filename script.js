// Menu
const menuToggle = document.querySelector(".menuIcon");
const navbar = document.getElementById("navbar");
// videos
const slideVideoShow = document.getElementById("slideShow");
const slidesVideo = slideShow.getElementsByTagName("video");
// titulos y parrafos
const slideTextShow = document.getElementById("slideShowText");
const slidesText = slideShowText.getElementsByTagName("div");
// botones prev y next
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

const showMenu = () => {
  menuToggle.classList.toggle("active");
  navbar.classList.toggle("active");
};

let index = 0;

function showNextVideoAndText() {
  slidesVideo[index].classList.remove("active") &
    slidesText[index].classList.remove("active");
  index++;
  if ((index > slidesVideo.length - 1) & (slidesText.length - 1)) {
    index = 0;
  }
  slidesVideo[index].classList.add("active") &
    slidesText[index].classList.add("active");
}

function showPrevVideoandText() {
  slidesVideo[index].classList.remove("active") &
    slidesText[index].classList.remove("active");
  index--;
  if (index < 0) {
    index = (slidesVideo.length - 1) & (slidesText.length - 1);
  }
  slidesVideo[index].classList.add("active") &
    slidesText[index].classList.add("active");
}

menuToggle.addEventListener("click", showMenu);
nextButton.addEventListener("click", showNextVideoAndText);
prevButton.addEventListener("click", showPrevVideoandText);
