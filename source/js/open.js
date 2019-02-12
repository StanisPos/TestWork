'use strict';

(function() {
  var openBlock = document.querySelector('.open');
  var openButton = document.querySelector('.open__button');
  var openElements = document.querySelectorAll('.open__item');

  var lastTimeout;

  var openingItems = function() {
    for(var i = 0; i < openElements.length; i++) {
      openElements[i].classList.toggle('open__hidden');
    };

    if(openButton.textContent === 'Закрыть') {
      openButton.textContent = 'Открыть';
    } else {
      openButton.textContent = 'Закрыть';
    }
  };

  openBlock.addEventListener('click', function(evt) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(function() {
      if(evt.target === openButton) {
        evt.preventDefault();
        openingItems();
      }
    }, 1000)
  });

}) ();
