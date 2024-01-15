// Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}
// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}

// Scroll Reveal
const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});


sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
    interval: 200
})


function search() {
    const searchInput = document.getElementById("searchInput").value;
    const searchResults = document.getElementById("searchResults");

    // Define your search logic here
}


document.addEventListener("DOMContentLoaded", function () {
    const navbar1 = document.querySelector('.navbar1');
    const navbarone = document.querySelector('.navbarone');
  
    const handleScroll = () => {
      window.scrollY > 0 ? navbar1.classList.add('active') : navbar1.classList.remove('active');
    };
  
    window.addEventListener("scroll", handleScroll);
  
    // Your logic for handling dynamic behavior can be added here
  });
  


  //stars***********************************************************************************************

  document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        const rating = box.dataset.rating;
        const price = box.dataset.price;

        // Update the rating and price display
        box.querySelector("h3").innerHTML = generateStarRating(rating);
        box.querySelector("span").innerHTML = price + "₾";

        // Add click event listener for adding to cart
        box.querySelector(".bx-cart-alt").addEventListener("click", function () {
            addToCart(box.dataset.category, price);
        });
    });

    // Function to generate star rating HTML based on the rating value
    function generateStarRating(rating) {
        const stars = Array.from({ length: 5 }, (_, index) => {
            const starClass = index < rating ? "star-rating" : "star-rating-empty";
            return `<div class="${starClass}" data-rating="${index + 1}"></div>`;
        });

        return stars.join("");
    }

    // Function to handle adding an item to the cart (you can customize this function)
    function addToCart(category, price) {
        alert(`Added ${category} to the cart. Price: ${price}₾`);
        // Add your logic for handling the cart here
    }
});






//scrolling arrows 
let scrollContainer = document.querySelector(".menu-container");
let leftBtn = document.getElementById("left-arrow");
let rightBtn = document.getElementById("right-arrow");

// Clone the first and last item for infinite scrolling
scrollContainer.appendChild(scrollContainer.firstElementChild.cloneNode(true));
scrollContainer.insertBefore(scrollContainer.lastElementChild.cloneNode(true), scrollContainer.firstElementChild);

rightBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 900;

    // Check if we've reached the end, and reset to the beginning if needed
    if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollLeft = 0;
    }
});

leftBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 900;

    // Check if we've reached the beginning, and go to the end if needed
    if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    }
});



//ისრების გაქრობა

const scrollArrows = document.querySelectorAll('.scroll-arrow');

document.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const section = document.querySelector('.menu');
  const sectionOffsetTop = section.offsetTop;
  const sectionHeight = section.clientHeight;

  // Toggle visibility based on scroll position
  scrollArrows.forEach(arrow => {
    arrow.style.display = scrollPosition > sectionOffsetTop && scrollPosition < (sectionOffsetTop + sectionHeight)
      ? 'block'
      : 'none';
  });
});


 