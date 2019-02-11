'use strict';

(function() {
  var blockParent = document.querySelector('.centering__item');
  var blockChild = document.querySelector('.centering__child--second');

  var heightParent = blockParent.offsetHeight;
  var widthParent = blockParent.offsetWidth;

  var heightChild = blockChild.offsetHeight;
  var widthChild = blockChild.offsetWidth;

  blockChild.style.marginTop = (heightParent / 2 - heightChild / 2) + 'px';
  blockChild.style.marginLeft = (widthParent / 2 - widthChild / 2) + 'px';

}) ();
