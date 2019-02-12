'use strict';

(function() {
  var dataButton = document.querySelector('.data__button');
  var popup = document.querySelector('.data__popup');
  var popupClose = popup.querySelector('.data__button--close');

  var fragment = document.createDocumentFragment();

  var title = function(obj) {
    var title = document.createElement('h2');
    title.className = 'data__title';
    title.textContent = obj.company;
    fragment.appendChild(title);
  }

  var paragraph = function(obj) {
    var p = document.createElement('p');
    p.className = 'data__text';
    p.textContent = obj.about;
    fragment.appendChild(p);
  }

  var picture = function(obj) {
    var pic = document.createElement('img');
    pic.className = 'data__pic';
    pic.src = obj.picture;
    fragment.appendChild(pic);
  }

  var getData = function(data) {
    title(data);
    picture(data);
    paragraph(data);
    popup.appendChild(fragment);
  }

  var onError = function(message) {
    console.error(message);
  };

  var onSuccess = function(data) {
    popup.classList.remove('visually-hidden');
    getData(data[window.common.getRandomNumber(0, data.length)]);
    dataButton.disabled = true;
    console.log(popup.children);

  };

  dataButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    window.backend.load(onSuccess, onError);
  });

  popupClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.add('visually-hidden');
    for(var i = popup.children.length - 1; i > 0; i--) {
      popup.children[i].remove();
    }
    dataButton.disabled = false;
  });

}) ();
