import $ from 'jquery';

$(window).scroll(function (){

  if ($(window).width() < 992) {
        $('.main-header').addClass('main-header_sticky');
    }
    else {
        if ($(this).scrollTop() > 0){
          $('.main-header').addClass('main-header_sticky');
        } else{
          $('.main-header').removeClass('main-header_sticky');
        }
    }
});
