const expertiseCols = document.querySelectorAll('.expertise-cols1, .expertise-cols2');


function handleVisibility(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}

const observer = new IntersectionObserver(handleVisibility, {
  rootMargin: '0px 0px -50% 0px'
});

expertiseCols.forEach(col => {
  observer.observe(col);
});

const topContainer = document.querySelector('.top-container');
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > topContainer.offsetHeight) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
$('.back-to-top').on('click', function(event) {
  event.preventDefault();
  $('html, body').animate({scrollTop: 0}, 500);
});