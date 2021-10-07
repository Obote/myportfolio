const ham = document.getElementById('toggleButton');
const close = document.getElementById('close');
const title = document.getElementById('title');
const men = document.getElementById('menu');
const listItems = document.getElementsByClassName('list-item');
const portfolio = document.getElementById('portfolio');

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
    title: 'My Project1',
    image: './images/Icons/bg.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    tech: ['html', 'Ruby on rail', 'css', 'Github'],
  },
  {
    title: 'My Project2',
    image: './images/Icons/bg.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    tech: ['html', 'Ruby on rail', 'css', 'Github'],
  },
  {
    title: 'My Project3',
    image: './images/Icons/bg.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    tech: ['html', 'Ruby on rail', 'css', 'Github'],
  },
  {
    title: 'My Project4',
    image: './images/Icons/bg.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    tech: ['html', 'Ruby on rail', 'css', 'Github'],
  },
];

const projectCards = projects.map(({ title, image, tech }, i) => {
  const cardSection = document.createElement('section');
  cardSection.classList.add('experience-container', `bg${i + 1}`);
  cardSection.innerHTML = `<img src="${image}" alt="project image" />
          <div class="sec-wrap">
            <h3>${title}</h3>
            <p>
              A daily selection of privately personalized reads; no accounts or
              sign-ups required. has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a standard
              dummy text.
            </p>
            <ul class="stack-container">
              <li class="border-right padding-right">${tech[2]}</li>
              <li class="border-right padding-right">${tech[0]}</li>
              <li class="border-right padding-right">${tech[3]}</li>
              <li class="padding-right">${tech[1]}</li>
            </ul>
            <button type="button" class="project-button" id="1">See Project</button>
          </div>`;
  return cardSection;
});
const divProject = document.createElement('div');

function addEventListenerList() {
  projectCards.forEach((card) => {
    console.log(typeof card);
    portfolio.appendChild(card);
  });

  const btn = document.querySelectorAll('.project-button');
  for (let i = 0; i < btn.length; i += 1) {
    btn[i].onclick = ({ target }) => {
      const projectId = target.id;
      divProject.id = 'modal';
      divProject.classList.add('modal', 'flex');
      document.querySelector('.overal').style.display = 'flex';

      let techHTML = '';
      const li = target.parentNode.children[2].children;
      const title = target.parentNode.children[0].innerHTML;
      for (let l = 0; l < li.length; l += 1) {
        techHTML += `<li class="modal-language">${li[l].innerHTML}</li>` + '\n';
      }

      divProject.innerHTML = `<section class="modal-header flex">
          <div class="top-side-modal flex">
            <h1>${title}</h1>
            <a class="close-popup">&times;</a>
          </div>
        </section>
        <div class="popup-img">
          <img width="330px" src="${projects[projectId].image}" alt="placeholder"/>
        </div>
        <section class="modal-section">
          <div class="modal-description">
            <p id = "P-description"class="modal-P">${projects[projectId].description}</p>
          </div>
          <div class="modal-div-language flex">
            <ul id="project-list">
            ${techHTML}
            </ul>
          </div>
          <div class="modal-div-sources flex">
            <button class="modal-buttons">See Live<a href="#"></a></button>
            <button class="modal-buttons">See Source<a href="#"></a></button>
          </div>
        </section> 
        `;

      document.getElementById('overal').appendChild(divProject);

      const erase = document.querySelector('.close-popup');
      erase.onclick = () => {
        document.querySelector('.overal').style.display = 'none';
        divProject.remove();
      };
    };
  }
}
addEventListenerList();