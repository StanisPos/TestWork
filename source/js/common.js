'use strict';
(function() {
  var getRandomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  window.common = {
    getRandomNumber: getRandomNumber
  }
}) ();
