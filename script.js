'use strict';
const navBar = document.querySelector('.nav')
const navBarList = document.querySelector('.nav__list')

const toggleNavBar = function (e) {
  const btn = e.target.closest('.nav__menu')
  if (!btn) return;

  navBarList.classList.toggle('nav__list--toggle')
}

navBar.addEventListener('click', toggleNavBar)

console.log(true);