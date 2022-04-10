$(document).ready(function($) {
    for(let e of document.getElementsByClassName('count')) {
        e.textContent = 0;
    }
    let count = 0;
    $('.options-label').on("click",function() {
        let countText = this.parentNode.parentNode.parentNode.children[0].children[0].children[1];
        count++;
        countText.textContent =  count;
    });

});
