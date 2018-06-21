$('#confirm').click(function () {
    $('.result').css("display", "none");

    let result = $('<div>').addClass('notification');
    result.appendTo('.flex');
    let message = $('<h2>').text('Your reservation is successfull!');
    message.css('margin-top', '75px');
    message.css('text-align', 'center');
    message.appendTo(result);
    let closing = $('<span>X</span>');
    closing.prependTo(result);
    result.fadeIn(2000);

    closing.click(function(){
        result.fadeOut(1500);
    });
});