const ham = document.getElementById('toggleButton');
const men = document.getElementById('menu');


ham.addEventListener('click', () => {
    men.classList.toggle('bgshow');
});