//Mobile-menu
const burger = document.querySelector('.burger');
const header = document.querySelector('header');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
  body.classList.toggle('block-scroll');
  header.classList.toggle('is-active');
});

//Active menuItem
const onAddActiveClass = (menuItem) => {
  const activeMenuItem = document.querySelector('.menu a.active').classList.remove('active');
  menuItem.classList.add('active');
}
const menuItems = document.querySelectorAll('.menu a');
for (let menuItem of menuItems) {
  menuItem.onclick = () => onAddActiveClass(menuItem);
}
