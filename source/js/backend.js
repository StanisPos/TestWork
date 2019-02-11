'use strict';

(function() {
  var URL_RECEIVE = 'http://www.json-generator.com/api/json/get/ckogyzSqIy?indent=2';

  var requestData = function(method, url, onSuccess, onError) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function(evt) {
      switch (xhr.status) {
        case window.constants.STATUS_OK:
          onSuccess(xhr.response);
          break;
        case window.constants.STATUS_BAD_REQUEST:
          onError('Неверный запрос');
          break;
        case window.constants.STATUS_UNAUTHORIZED:
          onError('Пользователь не авторизован');
          break;
        case window.constants.STATUS_NOT_FOUND:
          onError('Ничего не найдено');
          break;
        default:
          onError('Обратитесь в нашу службу поддержки');
      }
    });

    xhr.addEventListener('error', function() {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function() {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 5000;

    xhr.open(method, url);
    xhr.send();
  };

  var load = function(onSuccess, onError) {
    requestData('GET', URL_RECEIVE, onSuccess, onError);
  }

  window.backend = {
    load: load
  }

}) ();
