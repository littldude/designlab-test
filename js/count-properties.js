$(document).ready(function($) {
    function calc_filters_count(input, is_init) {
        if(is_init && !input.checked) {
            return;
        }
        let countText = input.parentNode.parentNode.parentNode.children[0].children[0].children[1];
        let count = countText.textContent === '' ? 0 : Number(countText.textContent);
        count += input.checked ? 1 : -1;
        countText.textContent = count > 0 ? count : '';
    }

    let checkboxes = document.getElementsByClassName('options-checkbox');
    for(let e of checkboxes) {
        calc_filters_count(e, true);
    }

    $('.options-checkbox').on("change",function() {
        calc_filters_count(this, false);
    });

});
