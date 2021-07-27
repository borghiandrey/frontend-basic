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
const btnImage = document.getElementById('btnImage');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.querySelector('#body');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){
  console.log('hamburger button clicked!');

  if (btnHamburger.classList.contains('open')) {
    btnImage.src="icon-hamburger.16ac0978.svg";

    body.classList.remove('noscroll');
    btnHamburger.classList.remove('open');
    overlay.classList.remove('open');
    mobileMenu.classList.remove('open');
    fadeElems.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    })
    
  } else {
    btnImage.src="icon-close.0093b7d5.svg";
    
    btnHamburger.classList.add('open');
    overlay.classList.add('open');
    mobileMenu.classList.add('open');
    body.classList.add('noscroll');
    fadeElems.forEach(function(element){
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    })
  }
})
