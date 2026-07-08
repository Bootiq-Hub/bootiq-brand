/*!
 * bootiq-slides.js — mini runtime pro BOOTIQ HTML prezentace (~2 kB)
 * Šipky/PgDn/mezerník = další slide · šipky zpět/PgUp = předchozí
 * Home/End = začátek/konec · F = celá obrazovka
 * Progress bar + počítadlo + #hash aktuálního slidu.
 */
(function () {
  'use strict';

  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  if (!slides.length) return;

  var progress = document.createElement('div');
  progress.className = 'biq-progress';
  var counter = document.createElement('div');
  counter.className = 'biq-counter';
  document.body.appendChild(progress);
  document.body.appendChild(counter);

  var current = 0;

  function update(i) {
    current = Math.max(0, Math.min(i, slides.length - 1));
    progress.style.width = ((current + 1) / slides.length) * 100 + '%';
    counter.textContent = current + 1 + ' / ' + slides.length;
    if (history.replaceState) history.replaceState(null, '', '#' + (current + 1));
  }

  function go(i) {
    var target = Math.max(0, Math.min(i, slides.length - 1));
    slides[target].scrollIntoView({ behavior: 'smooth', block: 'start' });
    update(target);
  }

  // Sledování ručního scrollu
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) update(slides.indexOf(e.target));
        });
      },
      { threshold: 0.6 },
    );
    slides.forEach(function (s) {
      io.observe(s);
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case 'PageDown':
      case ' ':
        e.preventDefault();
        go(current + 1);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
        e.preventDefault();
        go(current - 1);
        break;
      case 'Home':
        e.preventDefault();
        go(0);
        break;
      case 'End':
        e.preventDefault();
        go(slides.length - 1);
        break;
      case 'f':
      case 'F':
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen();
        break;
    }
  });

  // Start podle #hash
  var fromHash = parseInt(location.hash.slice(1), 10);
  if (fromHash >= 1 && fromHash <= slides.length) {
    slides[fromHash - 1].scrollIntoView();
    update(fromHash - 1);
  } else {
    update(0);
  }
})();
