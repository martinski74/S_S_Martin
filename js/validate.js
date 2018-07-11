function validate(e) {
   e.preventDefault();
    let name = $('#formGroupName').val();
    let email = $('#formGroupEmail').val();
    let phone = $('#formGroupPhone').val();
    let text = $('#message').val();

    if (name != '') {
        $('.name-message').hide();
    }
    if (name == '') {
        $('.name-message')
            .text('This field is required! Please enter your name!')
            .css('color', 'red');
    }
    if (email != '') {
        $('.email-message').hide();
    }
    if (email == '') {
        $('.email-message')
            .text('This field is required! Please enter you email!')
            .css('color', 'red');
    }
    if (phone != '') {
        $('.phone-message').hide();
    }
    if (phone == '') {
        $('.phone-message')
            .text('This field is required! Please enter your phone!')
            .css('color', 'red');
    }
    if (text != '') {
        $('.text-message').hide();
    }
    if (text == '') {
        $('.text-message')
            .text('This field is required! Please enter your message!')
            .css('color', 'red');
    }


}