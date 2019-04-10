import $ from 'jquery';

const mfbo = $('.main-footer__button_one');
const mff = $('.main-footer__form');

mfbo.click(function() {
    console.log(mfbo);

    if (mfbo.hasClass('active'))
    {
        mfbo.removeClass('active');
        mff.slideUp();
    }
    else {
        mfbo.addClass('active');
        mff.slideDown();
    }

});