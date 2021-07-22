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