const Intro =  document.querySelector('.intro');
const Html = document.querySelector('html')
window.onload = () => {
  Intro.classList.add('remove');
  setTimeout(() => {
    Html.classList.remove('overflow');
  }, 3000);
}
const Menu = document.querySelector('.btn_menu');
Menu.addEventListener('click', function(){    
    const Side = document.querySelector('.side');
    const BODY = document.querySelector('body');
    Side.classList.toggle('active');
    Html.classList.toggle('overflow');
    Menu.classList.toggle('active');
})

const items = document.querySelectorAll('.slider_item');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
const navItem = document.querySelector('a.toggle-nav');
let count = 0;

function showNextItem() {
  items[count].classList.remove('active');

  if(count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add('active');
  console.log(count);
}

function showPreviousItem() {
  items[count].classList.remove('active');

  if(count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].classList.add('active');
  // Check if working...
  console.log(count);
}

function toggleNavigation(){
  this.nextElementSibling.classList.toggle('active');
}

function keyPress(e) {
  e = e || window.event;
  
  if (e.keyCode == '37') {
    showPreviousItem();
  } else if (e.keyCode == '39') {
    showNextItem();
  }
}

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress);
// navItem.addEventListener('click', toggleNavigation);

let Hoverbox = document.querySelectorAll('.right');
let Hoverimg = document.querySelectorAll('.hover_img');
Hoverbox.forEach((Hoverbox, idx) =>{
  Hoverbox.addEventListener('mousemove', (e) =>{
    Hoverbox.children[0].style.opacity = 1;
    Hoverbox.children[0].style.transform = `translate(${e.clientX/3}px, ${e.clientY-300}px)`
    Hoverimg[idx].style.transform = 'scale(1, 1)';
  })
})

const targets = document.querySelectorAll(".opacity");
const isAnimated = "is-animated";
const threshold = 0.5;

console.log(targets);
function callback(entries, observer) {
  entries.forEach((entry) => {
    const elem = entry.target;
    if (entry.intersectionRatio >= threshold) {
      elem.classList.add(isAnimated);
      //observer.unobserve(elem);
    } else {
      elem.classList.remove(isAnimated);
    }
  });
}

const observer = new IntersectionObserver(callback, { threshold });
for (const target of targets) {
  observer.observe(target);
}