$('.room').on('click', function() {  // used Slick library
    $('.slider').slick();
    $('.room')
    .css('width','60%')
    .css('margin-left','21%')


    let close = $('<span> &#10060;</span>').addClass('closing')
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