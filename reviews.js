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
      currentPeopleItem.classList.add("reviews__item--active");
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

     
                                          