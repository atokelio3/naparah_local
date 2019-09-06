/* showSideBar */

var switcher = document.querySelector('.header__sidebar-switcher');
switcher.onclick = function () {
  switcher.classList.toggle('header__sidebar-switcher--active');
  document.querySelector('.sidebar').classList.toggle('sidebar--active');
};

/* toggleHeaderSearch */

document.querySelector('.header__search-button').onclick = function () {
  document.querySelector('.header__search').classList.add('header__search--active');
  document.querySelector('.header__search .search-form__input').focus();
};

document.querySelector('.header__search-form .search-form__close-button').onclick = function () {
  document.querySelector('.header__search').classList.remove('header__search--active');
};

/* toggleHeaderUserDropdown */

document.querySelector('.header__user-button').onclick = function () {
  document.querySelector('.header__user-dropdown').classList.toggle('header__user-dropdown--active');
};

/* handleModalWindow */

document.querySelector('.header__user-button').onclick = function () {
  document.querySelector('.modal').classList.add('modal--active');
  document.querySelector('.body').classList.add('body--no-scroll');
};

document.querySelector('.modal__close-button').onclick = function () {
  document.querySelector('.modal').classList.remove('modal--active');
  document.querySelector('.body').classList.remove('body--no-scroll');
};

/* changeLoginForm */

document.querySelector('.login-form .button').onclick = function () {
  document.querySelector('.login-form').classList.toggle('login-form--verify');
};

/* toggleCartShareLink */

document.querySelector('.cart__share .share__button').onclick = function () {
  document.querySelector('.cart__share').classList.toggle('share--active');
};