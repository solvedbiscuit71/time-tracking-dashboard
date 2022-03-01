const nav = [
  {
    name: "daily",
    element: document.querySelector(".nav .nav__element:nth-child(1)"),
    isActive: false
  },
  {
    name: "weekly",
    element: document.querySelector(".nav .nav__element:nth-child(2)"),
    isActive: true
  },
  {
    name: "monthly",
    element: document.querySelector(".nav .nav__element:nth-child(3)"),
    isActive: false
  }
]

const main = {
  "work": {
    current: document.querySelector(".card.card--work .card__info-current span"),
    previous: document.querySelector(".card.card--work .card__info-previous span")
  },

  "play": {
    current: document.querySelector(".card.card--play .card__info-current span"),
    previous: document.querySelector(".card.card--play .card__info-previous span")
  },
  
  "study": {
    current: document.querySelector(".card.card--study .card__info-current span"),
    previous: document.querySelector(".card.card--study .card__info-previous span")
  },

  "exercise": {
    current: document.querySelector(".card.card--exercise .card__info-current span"),
    previous: document.querySelector(".card.card--exercise .card__info-previous span")
  },

  "social": {
    current: document.querySelector(".card.card--social .card__info-current span"),
    previous: document.querySelector(".card.card--social .card__info-previous span")
  },

  "self-care": {
    current: document.querySelector(".card.card--self-care .card__info-current span"),
    previous: document.querySelector(".card.card--self-care .card__info-previous span")
  },
}

/* Utils Function */

function changeActive(domElement) {
  const toActive = nav.find(item => item.element == domElement);

  // make the active element in-active
  const curActive = nav.find(item => item.isActive)
  curActive.isActive = false;
  curActive.element.classList.remove("nav__element--active")

  // make nav__element active
  toActive.isActive = true;
  toActive.element.classList.add("nav__element--active")
}

function renderMain() {
  const curActive = nav.find(item => item.isActive).name

  for (const [key,value] of Object.entries(main)){
    value.current.innerText = data[key][curActive].current
    value.previous.innerText = data[key][curActive].previous
  }
}

/* Event Listener */
nav.forEach(item => {
  item.element.addEventListener('click', event => {
    event.preventDefault()

    changeActive(event.target)
    renderMain()
  })
})

nav[1].element.classList.add("nav__element--active")
renderMain()
