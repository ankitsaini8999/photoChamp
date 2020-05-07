$(document).ready(function() {
    $('.nav-button').click(function() {
        $('.nav-button').toggleClass('change');
    });

  $(window).scroll(function(){
    let position = $(this).scrollTop();
    if(position >= 280){
        $('.nav-menu').addClass('custom-navbar');
    }
    else {
       $('.nav-menu').removeClass('custom-navbar'); 
    }
  });  

 $('.gallery-list-item').click(function() {
    let value = $(this).attr('data-filter');
    if(value === 'all') {
        $('.filter').show(500);
    } else{
        $('.filter').not('.' + value).hide(500);
        $('.filter').filter('.' + value).show(500);
    }
 }); 

 $('.gallery-list-item').click(function() {
    $(this).addClass('active-item').siblings().removeClass('active-item');
 });

  $(window).scroll(function() {
     let position = $(this).scrollTop();
     if(position >= 4200)
     {
        $('.card1').addClass('movefromleft');
        $('.card2').addClass('movefrombottom');
        $('.card3').addClass('movefromright');
     }
     else{
        $('.card1').removeClass('movefromleft');
        $('.card2').removeClass('movefrombottom');
        $('.card3').removeClass('movefromright');
     }
 });

});





                                