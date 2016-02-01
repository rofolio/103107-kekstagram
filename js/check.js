function getMessage (a,b) {
  if (a == true) {
  return "Переданное GIF-изображение анимировано и содержит " + b + " кадров";
  } else {
  return "Переданное GIF-изображение не анимировано";
  }
  if (typeof a == 'number') {
    return "Переданное SVG-изображение содержит " + a + " объектов и " + b * 4 + " атрибутов";
  }
  var sum = 0;
    for (var i = 0; i < a.length; i++) {
    sum += a[i];
    }
  if (Array.isArray(a)) {
  return "Количество красных точек во всех строчках изображения: " + sum;
}
  var square = 0;
  for (var i = 0; i < a.length; i++) {
    square += (a[i]+b[i]);
  }
  if (Array.isArray(a, b)) {
  return "Общая площадь артефактов сжатия: " + square + " пикселей";
  }
  }

getMessage();
