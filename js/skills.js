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
