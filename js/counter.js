
function counter() {

    if (localStorage.pagecount) {
        localStorage.pagecount = Number(localStorage.pagecount) + 1;
    }
    else {
        localStorage.pagecount = 1;
    }

    document.getElementById('visits')
        .innerHTML = "Visitors: " + localStorage.pagecount;

}
counter();
