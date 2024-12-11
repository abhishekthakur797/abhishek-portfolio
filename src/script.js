document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "banners/1_India Upcoming Matches 2023.jpg",
    "banners/2_World Cup Highlights.jpg",
    "banners/3_Cricket Legends.jpg",
  ]; // Initial array of image URLs

  let currentIndex = 0;

  const bannerImage = document.querySelector(".banner-image");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  // Function to update the banner image
  const updateImage = () => {
    bannerImage.src = images[currentIndex];
  };

  // Event listener for the right arrow
  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length; // Cycle to the next image
    updateImage();
  });

  // Event listener for the left arrow
  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Cycle to the previous image
    updateImage();
  });

  // Function to dynamically add new images
  const addNewImage = (imageUrl) => {
    images.push(imageUrl);
  };

  // Example: Dynamically add a new image
  addNewImage("img/banners/2_Travel GuruJi Banner.jpg");
  addNewImage("img/banners/4_Namma Yatri refferal code.jpg");
  addNewImage("img/banners/5_TOP 50 FANTASY APPS.jpg");
  addNewImage("img/banners/6_29 INDIA vs ENGLAND CWC23.jpg");
  addNewImage("img/banners/8_Sachin Tendulkar Awards copy.jpg");
  addNewImage(
    "img/banners/9_List Of Top 10 Telegram Channel For Online Deals.jpg"
  );
  addNewImage("img/banners/10_KKR SQUAD 2023.jpg");
  addNewImage("img/banners/11_Google Pay Referral Code Nr9U6.jpg");
});

// script for mobile navbar
const navMobile = document.getElementById("nav-mobile");
const navCut = document.getElementById("nav-cut");
const showMenu = document.getElementById("show-menu");

navCut.addEventListener("click", function navHide() {
  if (navMobile.classList.contains("flex")) {
    navMobile.classList.remove("flex");
    navMobile.classList.add("hidden");
  }
});

showMenu.addEventListener("click", function navShow() {
  if (navMobile.classList.contains("hidden")) {
    navMobile.classList.remove("hidden");
    navMobile.classList.add("flex");
  }
});

// Hide navbar when a link is clicked
const navLinks = navMobile.querySelectorAll("a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    if (navMobile.classList.contains("flex")) {
      navMobile.classList.remove("flex");
      navMobile.classList.add("hidden");
    }
  });
});
