$('.button--reset').on("click",function() {
    let check = document.getElementsByTagName('input');
    for(let e of check) {
        e.checked = false;
    }
});

