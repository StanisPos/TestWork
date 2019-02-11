'use strict';

(function() {
  var canvas = document.querySelector('.canvas');
  var canvasButton = document.querySelector('.canvas__button');
  var canvasButtonReset = document.querySelector('.canvas__button--reset');

  var check = false;

  var ctx = canvas.getContext('2d');

  var drawRect = function(x, y, width, height, fill) {
    ctx.fillStyle = fill;
    ctx.fillRect(x, y, width, height);
  };

  var drawCircle = function(x, y, radius, fill) {
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
  };;

  var drawTriangle = function(x, y, fill) {
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(650, 350);
    ctx.lineTo(550, 550);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  }

  canvas.width = window.constants.MAX_WIDTH_CANVAS;
  canvas.height = window.constants.MAX_HEIGHT_CANVAS;

  canvasButton.addEventListener('click', function(evt) {
    evt.preventDefault();

    canvasButtonReset.classList.remove('visually-hidden');

    drawRect(50, 50, 200, 200, '#42a642');
    drawRect(50, 350, 300, 200, '#a66f42');
    drawCircle(650, 150, 100, 'orange');
    drawTriangle(750, 550, 'blue');

    check = true;

    if (check) {
      document.addEventListener('keyup', function(evt) {
        if (evt.keyCode === window.constants.ESC_KEY) {
          evt.preventDefault();
          ctx.clearRect(0, 0, 800, 600);
          canvasButtonReset.classList.add('visually-hidden');
        }
      })
    };

    if (check) {
      canvasButtonReset.addEventListener('click', function(evt) {
        evt.preventDefault();
        ctx.clearRect(0, 0, 800, 600);
        canvasButtonReset.classList.add('visually-hidden');
      })
    };
  });

}) ();
