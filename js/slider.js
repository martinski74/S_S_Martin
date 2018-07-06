$('.room').on('click', function() {
    $('.slider').slick();
    $('.room')
    .css('width','60%')
    .css('margin-left','25%')


    let close = $('<span>X</span>').addClass('closing')
    .css('position','relative')
    .css('left','90%')
    .css('font-size', '20px')
    .css('font-weight','bolder')
    .prependTo('.container');

    close.click(function () {
        $('.slider').slick('unslick');
        $('.room')
    .css('width','100%')
    .css('margin-left','0%');
    close.hide()
    });
  });