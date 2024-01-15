document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".stars .box");
  
    boxes.forEach(box => {
      const rating = box.dataset.rating;
  
      // Update the rating display
      box.querySelector("h3").innerHTML = generateStarRating(rating);
    });
  
    // Function to generate star rating HTML based on the rating value
    function generateStarRating(rating) {
      const stars = Array.from({ length: 5 }, (_, index) => {
        const starClass = index < rating ? "star-rating" : "star-rating-empty";
        return `<div class="${starClass}" data-rating="${index + 1}"></div>`;
      });
  
      return stars.join("");
    }
  });
  