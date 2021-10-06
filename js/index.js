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

const btn = document.querySelectorAll('.project-button');
const divProject = document.createElement('div');

function addEventListenerList() {
  for (let i = 0; i < btn.length; i += 1) {
    btn[i].addEventListener('click', (event) => {
      const projectId = event.target.id;
      divProject.id = 'modal';
      divProject.className = 'modal flex';
      document.querySelector('.overal').style.display = 'flex';

      let techHTML = '';
      for (let l = 0; l < projects[i].tech.length; l += 1) {
        techHTML += `<li class="modal-language">${projects[i].tech[l]}</li>`;
      }

      divProject.innerHTML = '<section class="modal-header flex">'
        + '<div class="top-side-modal flex">'
        + `<p>${projects[projectId].title}</p>`
        + '<a class="close-popup">&times;</a>'
        + '</div>'
        + '</section>'
        + '<div class="popup-img">'
        + `<img width="330px" src="${projects[projectId].image}" alt="placeholder>`
        + '</div>'
        + '<section class="modal-section">'
        + '<div class="modal-description">'
        + `<p id = "P-description"class="modal-P">${projects[projectId].description}</p>`
        + '</div>'
        + '<div class="modal-div-language flex">'
        + `<ul id="project-list">${techHTML}</ul>`
        + '</div>'
        + '<div class="modal-div-sources flex">'
        + '<button class="modal-buttons">See Live<a href="#"></a></button>'
        + '<button class="modal-buttons">See Source<a href="#"></a></button>'
        + '</div>'
        + '</section>';

      document.getElementById('overal').appendChild(divProject);

      const erase = document.querySelector('.close-popup');
      erase.addEventListener('click', () => {
        document.querySelector('.overal').style.display = 'none';
        divProject.remove();
      });
    });
  }
}
addEventListenerList();