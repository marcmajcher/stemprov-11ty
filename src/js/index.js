document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener("scroll", downArrowCheck);
  const arrow = document.getElementById('down-arrow');
  const img = document.querySelector('.big-header');
  // arrow.classList.add('fadein')

  function downArrowCheck(e) {
    if (window.scrollY  > img.height + img.offsetTop - window.innerHeight + 60) { // whatever
      arrow.classList.remove('fadein')
      arrow.classList.add('fadeout')
    }
    else {
      arrow.classList.remove('fadeout')
      arrow.classList.add('fadein')
    }
  }
});
