$(document).ready(function() {
  $('.intro-slider').slick({
    arrows: false,
    dots: true
  });
  $('.reviews-slider__track').slick({
    slidesToShow: 2,
    prevArrow: $('.reviews-slider__button--prev'),
    nextArrow: $('.reviews-slider__button--next'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

const page = document.querySelector('.page');
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', function() {
  this.classList.toggle('menu-button--active');
  menu.classList.toggle('menu--active');
  // page.classList.toggle('page--lock');
  document.querySelector('html').classList.toggle('lock');
});