var header = document.getElementById('header');
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
var btnOpenMenu = document.querySelector('.btn-open-menu');
var btnCloseMenu = document.querySelector('.btn-close-menu');
var overlayMenu = document.querySelector('.overlay-menu');
var menuHeader = document.querySelector('.menu-header');


if(btnOpenMenu){
    btnOpenMenu.addEventListener('click', (e) => {
        overlayMenu.classList.add('active');
        menuHeader.classList.add('active');
    })
}
if(btnCloseMenu){
    btnCloseMenu.addEventListener('click', (e) => {
        removeActive();
    })
}

if(overlayMenu) {
    overlayMenu.addEventListener("click", function(event) {
      if(event.target===this) {
        removeActive();
      }
    });
}

function removeActive() {
    overlayMenu.classList.remove('active');
    menuHeader.classList.remove('active');
}

for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    
    menuItem.onclick = function(event) {
        removeActive();
    }
}

// Menu Mobile
// const navToggler = document.querySelector('.nav-toggler');
// const navTogglerIcon = document.querySelector('.nav-toggler i');
// const menuListItem = document.querySelector('.menu-list_item');
// const header = document.querySelector('#header');
// const cartHeader = document.querySelector('#cart-header');
// const logo = document.querySelector('#logo');
const btnsCollapse = document.querySelectorAll('.btn-collapse');
const menusCollapse = document.querySelectorAll('.menu-collapse');
const wrappersCollapse = document.querySelectorAll('.wrapper-collapse');

// if (menuListItem) {
// // eventOpen();
// //   function eventOpen() {
// //     navToggler.addEventListener('click', togglerClick);
// //   }
  
//   function togglerClick() {
//     if (menuListItem.classList.contains("hidden")) {
//       menuListItem.classList.replace("hidden", "flex");
//       logo.classList.replace("flex", "hidden");
//       cartHeader.classList.replace("flex", "hidden");
//       header.classList.replace("bg-primary-1", "bg-white");
//     //   navTogglerIcon.classList.replace("twi-17-menu-line-line", "twi-17-close-fill");
//     //   navTogglerIcon.classList.replace("text-white", "text-neutral-1-500");
//     } else {
//       menuListItem.classList.replace("flex", "hidden");
//       logo.classList.replace("hidden", "flex");
//       cartHeader.classList.replace("hidden", "flex");
//       header.classList.replace("bg-white", "bg-primary-1");
//     //   navTogglerIcon.classList.replace("twi-17-close-fill", "twi-17-menu-line-line");
//     //   navTogglerIcon.classList.replace("text-neutral-1-500", "text-white");
//     }
//   }
// }
if(window.innerWidth < 1279) {
  // Collapse sub menu
  for ( let i = 0; i < btnsCollapse.length ; i++) {
    if(btnsCollapse[i]){
      btnsCollapse[i].addEventListener('click', (e) => {
        for ( let j = 0; j < btnsCollapse.length ; j++){
          if(menusCollapse[j].classList.contains('collapse') && (i != j)){
            menusCollapse[j].classList.toggle('collapse');
            btnsCollapse[j].classList.toggle('collapse');
            wrappersCollapse[j].classList.toggle('collapse');
          }
        }
        wrappersCollapse[i].classList.toggle('collapse');
        menusCollapse[i].classList.toggle('collapse');
        btnsCollapse[i].classList.toggle('collapse');
        collapseSubMenu(menusCollapse[i]);
      });
    }
  }
  function collapseSubMenu(menuCollapse) {
    const btnsSubCollapse = menuCollapse.querySelectorAll('.btn-sub-collapse');
    const subMenusCollapse = menuCollapse.querySelectorAll('.sub-menu-collapse');
    for( let j = 0; j < btnsSubCollapse.length ; j++){
      if(subMenusCollapse[j].classList.contains('collapse')){
        subMenusCollapse[j].classList.toggle('collapse');
        btnsSubCollapse[j].classList.toggle('collapse');
      }
    }
    for (let i = 0; i < btnsSubCollapse.length; i++){
      if(btnsSubCollapse[i]){
        btnsSubCollapse[i].addEventListener('click', (e) => {
          btnsSubCollapse[i].classList.toggle('collapse');
          btnsSubCollapse[i].parentNode.classList.toggle('bg-primary-4');
          subMenusCollapse[i].classList.toggle('collapse');
        });
      }
    }
  }
}