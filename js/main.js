
// for sticky header navigation
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navMenu.classList.toggle('active');
    });
  } else {
    console.error('Hamburger or nav menu element not found.');
  }
});
//services section 
document.addEventListener('DOMContentLoaded', () => {
  const titles = document.querySelectorAll('.service-title');

  titles.forEach(title => {
    title.addEventListener('click', () => {
      const description = title.nextElementSibling;
      const isOpen = description.classList.contains('show');

      // Close all descriptions
      document.querySelectorAll('.service-description').forEach(desc => {
        desc.classList.remove('show');
      });
      // Remove underline from all titles
      document.querySelectorAll('.service-title').forEach(t => {
        t.classList.remove('active');
      });

      // If the clicked description was not open, open it and keep underline
      if (!isOpen) {
        description.classList.add('show');
        title.classList.add('active'); // keep underline
      }
      // If it was open, clicking again will close it and remove underline
    });
  });
});
//for review slider
document.addEventListener('DOMContentLoaded', () => {
  const reviewItems = document.querySelectorAll('.review-item');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentIndex = 0;
  const totalReviews = reviewItems.length;
  const slideIntervalTime = 5000; // 5000 ms = 5 seconds
  let slideInterval; // <-- Declare here

  function showReview(index) {
    reviewItems.forEach((item, i) => {
      item.style.display = i === index ? 'block' : 'none';
    });
  }

  showReview(currentIndex);

  // Next button click
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalReviews;
    showReview(currentIndex);
  });

  // Prev button click
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalReviews) % totalReviews;
    showReview(currentIndex);
  });

  // Auto-slide setup
  slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalReviews;
    showReview(currentIndex);
  }, slideIntervalTime);

  // Pause auto-slide on mouse enter
  const reviewSlider = document.querySelector('.review-slider');
  reviewSlider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });
  // Resume auto-slide on mouse leave
  reviewSlider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalReviews;
      showReview(currentIndex);
    }, slideIntervalTime);
  });
});
// for review form submission
//new review will automatically added to the review section
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('clientReviewForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('clientName').value;
    const position = document.getElementById('clientPosition').value;
    const reviewText = document.getElementById('clientReview').value;

    const reviewWrapper = document.getElementById('reviewWrapper');

    const newReview = document.createElement('div');
    newReview.className = 'review-item';

    newReview.innerHTML = `
        <img src="./images/default-profile.jpg" alt="Client Profile" class="client-profile" />
        <div class="review-content">
          <p class="client-name">${name}</p>
          <p class="client-position">${position}</p>
          <p class="client-review">"${reviewText}"</p>
        </div>
      `;

    reviewWrapper.appendChild(newReview);

    alert('Review added successfully!');
    this.reset();
  });
});