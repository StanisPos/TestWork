'use strict';

(function() {
  var dataButton = document.querySelector('.data__button');

  var dataArray;

  var onError = function(message) {
    console.error(message);
  };

  var onSuccess = function(data) {
    dataArray = data;

    console.log(dataArray);
  }

  dataButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    window.backend.load(onSuccess, onError);
  });

}) ();
