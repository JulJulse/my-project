const reviewsBar = document.querySelector('.reviews__list');
const reviewsItems = document.querySelectorAll('.reviews__item');
const reviewWrapp = document.querySelectorAll('.reviews__wrap');

reviewsBar.addEventListener('click' , e=>{
   e.preventDefault();
  
  
  if(e.target.classList.contains('reviews__link')){
    const currentPeopleLink = e.target;
    const currentPeopleItem = currentPeopleLink.closest('.reviews__item')
    const currentPeopleId = currentPeopleItem.id;
    
    for (const iterator of reviewsItems) {
      if(iterator !== currentPeopleItem){
        iterator.classList.remove("reviews__item--active");
      }
    }
    
    if(!currentPeopleItem.classList.contains('reviews__item--active')){
      currentPeopleItemfunction accordionTeam() {
        const workers = document.querySelectorAll(".accordeon__item");
        const teamAccord = document.querySelector(".accordeon");
      
        teamAccord.addEventListener("click", function (event) {
          event.preventDefault(); 
          const target = event.target; 
         
          if (target.classList.contains("accordeon__link")) {
            const worker = target.parentNode; 
            const content = target.nextElementSibling; 
            const contentHeight = content.firstElementChild.clientHeight; 
      
            for (const iterator of workers) {
              if (iterator !== worker) {
                iterator.classList.remove("accordeon__item-active");
                iterator.lastElementChild.style.height = 0;
              }
            }
      
            if (worker.classList.contains("accordeon__item-active")) {
              worker.classList.remove("accordeon__item-active");
              content.style.height = 0;
            } else {
              worker.classList.add("accordeon__item-active");
              content.style.height = contentHeight + "px";
            }
          }
        });
      }
      
      accordionTeam();.classList.add("reviews__item--active");
    }
    
    reviewWrapp.forEach(function(wrapp){
      if(currentPeopleId == wrapp.id){
        wrapp.classList.add('reviews__wrap--active');
      }else{
        wrapp.classList.remove('reviews__wrap--active');
      }
    })
  }
})

     
                                          