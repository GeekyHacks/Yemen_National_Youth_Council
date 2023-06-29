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

const viewMore = document.querySelector('.viewMore');
const listofFigures = document.querySelector('#figures');

const figuresArray = [
  {
    img: 'images/IbrahimAl_Hamdi.jpg',
    name: ' Ibrahim al-Hamdi',
    occupation: 'President',
    description:
      'was the leader of a military coup in the Yemen Arab Republic that overthrew the regime of President Abdul Rahman al-Iryani on 13 June 1974. After the revolt, he was President of the Military Command Council that governed the country.',
  },
  {
    img: 'images/SalimRubai.jpg',
    name: 'Salim Rubai Ali',
    occupation: 'President',
    description:
      'known by his comrades as "Salimin", was the Marxist head of state of the Peoples Democratic Republic of Yemen (South Yemen) from 22 June 1969 until his executionon 26 June 1978.',
  },
  {
    img: 'images/Abdrahman_al-Eryani.jpg',
    name: 'Abdul Rahman Yahya al-Eryani',
    occupation: 'President',
    description: 'was the President of the Yemen Arab Republic (North Yemen) from 5 November 1967 to 13 June 1974',
  },
  {
    img: 'images/Imam_qasam.png',
    name: 'Al-Mansur al-Qasim',
    occupation: 'Imam',
    description:
      ' was an Imam of Yemen, who commenced the struggle to liberate Yemen from the Ottoman occupiers. He was the founder of a Zaidi kingdom that endured, under many vicissitudes, until 1970.',
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
  let newFigure;
  if (window.innerWidth >= 768) {
    for (let i = 0; i < figuresArray.length; i += 1) {
      newFigure = document.createElement('li');
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
