
  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Check both product boxes and heading elements for visibility
  function checkVisibility() {
    const productBoxes = document.querySelectorAll('.product-wrapper');
    const headings = document.querySelectorAll('.onload-effect');

    // Check product boxes
    productBoxes.forEach(function(box) {
      if (isElementInViewport(box)) {
        box.classList.add('product-visible');
      }
    });

    // Check headings
    headings.forEach(function(heading) {
      if (isElementInViewport(heading)) {
        heading.classList.add('heading-visible');
      }
    });
  }

  // Run the check when the page scrolls or loads
  document.addEventListener('scroll', checkVisibility);
  window.addEventListener('load', checkVisibility);
