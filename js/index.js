const ham = document.getElementById('toggleButton');
const close = document.getElementById('close');
const title = document.getElementById('title');
const men = document.getElementById('menu');
const listItems = document.getElementsByClassName('list-item');

const menuHandler = () => {
  men.classList.toggle('menu-on');
  close.classList.toggle('hide');
  ham.classList.toggle('hide');
  title.classList.toggle('hide');
};

ham.addEventListener('click', menuHandler);
close.addEventListener('click', menuHandler);
// listItems.map((item) => item.addEventListener('click', menuHandler));
for (let i = 0; i < listItems.length; i += 1) {
  listItems[i].addEventListener('click', menuHandler);
}
