const Menu = document.querySelector('.menu');
window.addEventListener('scroll', function(){
    if(window.scrollY > 30){
        Menu.classList.add('sticky');
    }else{
        Menu.classList.remove('sticky');
    }
})

const Menulist = document.querySelectorAll('.menu_list > li');
const MenuContent = document.querySelectorAll('.layout_container')

function scrollAppear(){
    var paragraphsPosition;
    for (let i = 0; i < MenuContent.length; i++) {
      paragraphsPosition = MenuContent[i].getBoundingClientRect().top;
      var screenSize = window.innerHeight;
      if(paragraphsPosition < screenSize && !MenuContent[i].classList.contains("on") ){
        Menulist[i].classList.add('on')
        MenuContent[i].classList.add("on")
        }else if(paragraphsPosition > screenSize && MenuContent[i].classList.contains("on") ){
            Menulist[i].classList.remove('on')
            MenuContent[i].classList.remove("on")
        }
    }
}
window.addEventListener("scroll",scrollAppear);

Menulist.forEach((item) => {
    item.addEventListener("click", activeTab);
});

function activeTab(item) {
  const btnTarget = item.currentTarget;
  const content = btnTarget.dataset.content;

  MenuContent.forEach((item) => {
    item.classList.remove("on");
  });

  Menulist.forEach((item) => {
    item.classList.remove("on");
  });

  document.querySelector("#" + content).classList.add("on");
  btnTarget.classList.add("on");
}
