'use stict';

(function() {
  var list  = document.querySelector('.squares__list');
  var getElementsButton = document.querySelector('.squares__button');

  var fragment = document.createDocumentFragment();

  getElementsButton.addEventListener('click', function() {
    var listElement = document.querySelectorAll('.squares__item');

    var arrayColors = new Array(window.common.getRandomNumber(10, 100));

    if(listElement.length != 0) {
      for(var i = 0; i < listElement.length; i++) {
        listElement[i].remove();
      }
    };

    for (var i = 0; i < arrayColors.length; i++) {
      arrayColors[i] = 'rgb' + '(' + window.common.getRandomNumber(0, 255) + ',' + window.common.getRandomNumber(0, 255) + ',' + window.common.getRandomNumber(0, 255) + ')';
    }

    arrayColors.forEach(function(color) {
      var li = document.createElement('li');
      li.className = 'squares__item';
      li.style.backgroundColor = color;
      fragment.appendChild(li);
    });

    list.appendChild(fragment);
  });

}) ();
