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
  } else {
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
