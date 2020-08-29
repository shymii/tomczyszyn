"use strict";

var mainCard = document.querySelector('.main-cards');
mainCard.addEventListener('mouseover', function (e) {
  if (e.target.classList.contains('main-cards-item')) {
    e.target.children[0].style.marginTop = '15%';
  } else if (e.target.classList.contains('main-cards-item-title')) {
    e.target.style.marginTop = '15%';
  } else if (e.target.classList.contains('main-cards-item-content')) {
    e.target.parentElement.children[0].style.marginTop = '15%';
  }
});
mainCard.addEventListener('mouseout', function (e) {
  if (e.target.classList.contains('main-cards-item')) {
    e.target.children[0].style.marginTop = '';
  } else if (e.target.classList.contains('main-cards-item-title')) {
    e.target.style.marginTop = '';
  } else if (e.target.classList.contains('main-cards-item-content')) {
    e.target.parentElement.children[0].style.marginTop = '';
  }
});