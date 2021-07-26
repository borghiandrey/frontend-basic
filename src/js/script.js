(function() {
  function scrollHorizontally(e) {
      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
      document.getElementById('cards').scrollLeft -= (delta * 65); // Multiplied by 40
      e.preventDefault();
  }
  if (document.getElementById('cards').addEventListener) {
      // IE9, Chrome, Safari, Opera
      document.getElementById('cards').addEventListener('mousewheel', scrollHorizontally, false);
      // Firefox
      document.getElementById('cards').addEventListener('DOMMouseScroll', scrollHorizontally, false);
  } else {
      // IE 6/7/8
      document.getElementById('cards').attachEvent('onmousewheel', scrollHorizontally);
  }
})();

/* Hamburger button */

const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('#body');

btnHamburger.addEventListener('click', function(){
  console.log('hamburger button clicked!');

  if (btnHamburger.classList.contains('open')) {
    btnHamburger.classList.remove('open');
    overlay.classList.remove('open');
    mobileMenu.classList.remove('open');
    body.classList.remove('noscroll');
  } else {
    btnHamburger.classList.add('open');
    overlay.classList.add('open');
    mobileMenu.classList.add('open');
    body.classList.add('noscroll');
  }
})
