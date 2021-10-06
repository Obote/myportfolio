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
for (let i = 0; i < listItems.length; i += 1) {
  listItems[i].addEventListener('click', menuHandler);
}

// Popup

const projects = [
  {
    title: 'My Project',
    image: '../images/Icons/bg.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    tech: ['html', 'Ruby on rail', 'css', 'Github'],
  },
  {
    title: 'My Project',
    image: '../images/Icons/bg.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    tech: ['html', 'Ruby on rail', 'css', 'Github'],
  },
  {
    title: 'My Project',
    image: '../images/Icons/bg.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    tech: ['html', 'Ruby on rail', 'css', 'Github'],
  },
  {
    title: 'My Project',
    image: '../images/Icons/bg.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    tech: ['html', 'Ruby on rail', 'css', 'Github'],
  },
];
