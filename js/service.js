var servItem = document.querySelector('.services__item');
var servToggle = document.querySelector('.services__header');

servItem.classList.remove('services__item--no-js');

servToggle.addEventListener('click', function() {
  if (servItem.classList.contains('services__item--closed')) {
    servItem.classList.remove('services__item--closed');
    servItem.classList.add('services__item--opened');
  } else {
    servItem.classList.add('services__item--closed');
    servItem.classList.remove('services__item--opened');
  }
});
