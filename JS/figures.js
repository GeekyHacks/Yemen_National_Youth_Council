// menu popup

const modal = document.querySelector('#menuPage');
// Get the button that opens the modal
const menubtn = document.querySelector('#menuBtn');
// Get the x element that closes the modal
const menuX = document.querySelector('.menuX');

// get menu options to use it for hidemenu function
const menuItems = document.querySelectorAll('.menuPageList > li a');

menubtn.addEventListener('click', () => {
  modal.classList.toggle('showMenu');
});

menuX.addEventListener('click', () => {
  modal.classList.toggle('showMenu');
});

menuItems.forEach((element) => {
  element.addEventListener('click', () => {
    modal.classList.toggle('showMenu');
  });
});

const body = document.querySelector('body');
const viewMore = document.querySelector('.viewMore');
const listofFigures = document.querySelector('#figures');
const dynamicList = document.querySelector('#dynamicList');
let figuresArray = [
  {
    img: 'images/86020057.jpeg',
    name: 'Abd',
    occupation: 'revelotionist',
    description: 'sadsadasdsadasdasdasdas asdasdasda asdasd aasdasda',
  },
  {
    img: 'images/86020057.jpeg',
    name: 'Abd',
    occupation: 'revelotionist',
    description: 'sadsadasdsadasdasdasdas asdasdasda asdasd aasdasda',
  },
  {
    img: 'images/86020057.jpeg',
    name: 'Abd',
    occupation: 'revelotionist',
    description: 'sadsadasdsadasdasdasdas asdasdasda asdasd aasdasda',
  },
  {
    img: 'images/86020057.jpeg',
    name: 'Abd',
    occupation: 'revelotionist',
    description: 'sadsadasdsadasdasdasdas asdasdasda asdasd aasdasda',
  },
];

function figuresList() {
  for (let i = 0; i < figuresArray.length; i += 1) {
    const newFigure = document.createElement('li');
    newFigure.innerHTML = `
              <div class="imgPart">
                <img src="${figuresArray[i].img}" alt="Program icon" />
              </div>
              <div class="contentPart">
                <h2>${figuresArray[i].name}</h2>
                <h3>${figuresArray[i].occupation}</h3>
                <p>${figuresArray[i].description}</p>
              </div>
      `;
    listofFigures.appendChild(newFigure);
  }
}

window.addEventListener('load', () => {
  if (window.innerWidth >= 768) {
    for (let i = 0; i < figuresArray.length; i += 1) {
      const newFigure = document.createElement('li');
      newFigure.innerHTML = `
                <div class="imgPart">
                  <img src="${figuresArray[i].img}" alt="Program icon" />
                </div>
                <div class="contentPart">
                  <h2>${figuresArray[i].name}</h2>
                  <h3>${figuresArray[i].occupation}</h3>
                  <p>${figuresArray[i].description}</p>
                </div>
        `;

      listofFigures.appendChild(newFigure);
    }
  } else if (window.innerWidth < 768) {
    listofFigures.removeChild(newFigure);
    viewMore.style.display = 'block';
  }
});

viewMore.addEventListener('click', () => {
  if (window.innerWidth < 768) {
    figuresList();
    viewMore.style.display = 'none';
  }
});
