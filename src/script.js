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
  addNewImage("banners/2_Travel GuruJi Banner.jpg");
  addNewImage("banners/3_FRAN JONAS BIOGRAPHY.jpg");
  addNewImage("banners/4_Namma Yatri refferal code.jpg");
  addNewImage("banners/5_TOP 50 FANTASY APPS.jpg");
  addNewImage("banners/6_29 INDIA vs ENGLAND CWC23.jpg");
  addNewImage("banners/7_Liton Das BIOGRAPHY.jpg");
  addNewImage("banners/8_Sachin Tendulkar Awards copy.jpg");
  addNewImage("banners/9_List Of Top 10 Telegram Channel For Online Deals.jpg");
  addNewImage("banners/10_KKR SQUAD 2023.jpg");
  addNewImage("banners/11_Google Pay Referral Code Nr9U6.jpg");
});