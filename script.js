document.addEventListener("DOMContentLoaded", function () {
  var lastScrollTop = 0;
  var header = document.getElementById("header");
  var dropdown = document.getElementById("dropdown");

  window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var value = this.window.getComputedStyle(dropdown).getPropertyValue("display");

    if (this.window.innerWidth > 800 && value == "none") {
      if (scrollTop > lastScrollTop) {
        header.style.top = "-120px";
      } else {
        header.style.top = "0px";
      }
      lastScrollTop = scrollTop;
    }

  }
  );

});


let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function () {
  if (active + 1 > lengthItems) {
    active = 0;
  } else {
    active = active + 1;
  }
  changeBackground();
  reloadSlider();
}

prev.onclick = function () {
  if (active - 1 < 0) {
    active = lengthItems;
  } else {
    active = active - 1;
  }
  changeBackground();
  reloadSlider();
}

function reloadSlider() {
  let checkLeft = items[active].offsetLeft;
  list.style.left = -checkLeft + 'px';

  let lastActiveDot = document.querySelector('.slider .dots li.active');  
}


let backgrounds = [
  'assets/Batan_view/mahatao.jpg',
  'assets/Batan_view/Diura_Fishing_Village.jpg',
  'assets/Batan_view/13.jpg',
  'assets/Batan_view/chgurch.jpg'
];

function changeBackground() {
  let backgroundcon = document.getElementById('backgroundcon');
  backgroundcon.style.backgroundImage = `url(${backgrounds[active]})`;
}

// Automatic sliding
let refreshSlider = setInterval(() => {
  if (active + 1 > lengthItems) {
    active = 0;
  } else {
    active = active + 1;
  }
  changeBackground();
  reloadSlider();
}, 3000); // Change the interval (in milliseconds) as needed

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
})

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});