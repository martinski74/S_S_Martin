
$('.book-btn').click(function (ev) {

    ev.preventDefault();

    
    let name = $('#names').val();
    let firstDate = $('#arival').val();
    let secondDate = $('#departure').val();
    let numberOfNights = new Date(secondDate).getDate() - new Date(firstDate).getDate();
    $('#nights').val(numberOfNights);       //setting number of nights
    let adults = $('#adults').val();

    let result = 0;
    let arivalDate = new Date(firstDate);
    let depatureDate = new Date(secondDate);

    if (arivalDate > new Date('2018/5/20') && arivalDate < new Date('2018/7/15')) {
        result = 40;
    } else if (arivalDate > new Date('2018/7/16') && arivalDate < new Date('2018/8/31')) {
        result = 55;
    } else {
        result = 35;
    }
    let totalPrice = result * Number(adults) * Number(numberOfNights);

    $('.result').show();
    $('.yourNmae').append(name);
    $('.nights').append(numberOfNights);

    if (!isNaN(totalPrice)) {       // checking if price is NaN
        $('.total').append(totalPrice + ' lv.');
    } else {
        $('.total').append('0' + ' lv.');
    }
    
});





