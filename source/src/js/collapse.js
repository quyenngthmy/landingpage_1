// Menu Mobile
const wrappersCollapse = document.querySelectorAll('.collapse-wrapper');
const triggerCollapse = document.querySelectorAll('.collapse-trigger');
const listItemCollapse = document.querySelectorAll('.collapse-items');

for ( let i = 0; i < triggerCollapse.length ; i++) {
    if(triggerCollapse[i]){
      triggerCollapse[i].addEventListener('click', (e) => {
        for ( let j = 0; j < triggerCollapse.length ; j++){
          if(listItemCollapse[j].classList.contains('collapse') && (i != j)){
            listItemCollapse[j].classList.toggle('collapse');
            triggerCollapse[j].classList.toggle('collapse');
            wrappersCollapse[j].classList.toggle('collapse');
          }
        }
        wrappersCollapse[i].classList.toggle('collapse');
        listItemCollapse[i].classList.toggle('collapse');
        triggerCollapse[i].classList.toggle('collapse');
        collapseSubMenu(listItemCollapse[i]);
      });
    }
  }
  function collapseSubMenu(menuCollapse) {
    const btnsSubCollapse = menuCollapse.querySelectorAll('.btn-sub-collapse');
    const sublistItemCollapse = menuCollapse.querySelectorAll('.sub-collapse-items');
    for( let j = 0; j < btnsSubCollapse.length ; j++){
      if(sublistItemCollapse[j].classList.contains('collapse')){
        sublistItemCollapse[j].classList.toggle('collapse');
        btnsSubCollapse[j].classList.toggle('collapse');
      }
    }
    for (let i = 0; i < btnsSubCollapse.length; i++){
      if(btnsSubCollapse[i]){
        btnsSubCollapse[i].addEventListener('click', (e) => {
          btnsSubCollapse[i].classList.toggle('collapse');
          btnsSubCollapse[i].parentNode.classList.toggle('bg-primary-4');
          sublistItemCollapse[i].classList.toggle('collapse');
        });
      }
    }
  }