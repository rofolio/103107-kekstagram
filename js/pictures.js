'use strict';
/* global pictures: true */

(function() {
  var pictures = [];

  /* Обозначаем область выведения данных */
  var container = document.querySelector('.pictures');

  function createPictures() {
    container.innerHTML = '';
    var fragment = document.createDocumentFragment();
    /* Перебераем все элементы в структуре данных */
    pictures.forEach(function(picture) {
      var element = getElementFromTemplate(picture);
      fragment.appendChild(element);
    });
    container.appendChild(fragment);
  }
  createPictures();

  /* Создаём Дом-Элемент на основе шаблона */
  function getElementFromTemplate(data) {
    var template = document.querySelector('#picture-template');

    /* Проверяем поддержку тега template */
    if ('content' in template) {
      var element = template.content.children[0].cloneNode(true);
    } else {
      var element = template.children[0].cloneNode(true);
    }

    /* Указываем какие данные каким классам шаблона соотвествуют */
    element.href = data.url;
    element.querySelector('.picture-comments').textContent = data.comments;
    element.querySelector('.picture-likes').textContent = data.likes;

    /* Загружаем картинки */
    var addImage = new Image();
    addImage.onload = function() {
      clearTimeout(imageLoadTimeout);
      element.replaceChild(addImage, element.querySelector('img'));
    };

    /* Установка размеров изображения */
    addImage.width = 182;
    addImage.height = 182;

    /* Обработчик ошибки */
    addImage.onerror = function() {
      element.classList.add('picture-load-failure');
    };
    addImage.src = data.url;

    /* Установка таймаута */
    var IMAGE_TIMEOUT = 10000;

    imageLoadTimeout = setTimeout(function() {
      addImage.src = '';
      element.classList.add('picture-load-failure');
    }, IMAGE_TIMEOUT);

    return element;
  }

  /* Прячем блок с фильтрами */
  function hideFilters() {
    document.querySelector('.filters').classList.add('hidden');
  }
  /*Показываем блок с фильтрами*/
  function showFilters() {
    document.querySelector('.filters').classList.remove('hidden');
  }
  showFilters();
})();
