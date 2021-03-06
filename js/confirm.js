$('#confirm').click(function (ev) {
    ev.preventDefault();
    $('.result').css("display", "none");

    let result = $('<div>').addClass('notification');
    result.appendTo('.flex');
    let message = $('<h2>').text('Your reservation is accepted successfully!');
    message.css('margin-top', '75px');
    message.css('text-align', 'center');
    message.appendTo(result);
    // $('<p>').text('Thank you!').appendTo(message);
    var closing = $('<span>X</span>');
    closing.prependTo(result);
    result.fadeIn(1500);

    closing.click(function (ev) {
        ev.preventDefault();
        result.fadeOut(1000);
    });
});
