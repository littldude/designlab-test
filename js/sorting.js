
$('.filter__inner--item__date').on("click",function() {
    var $wrapper = $('.content__cards');

    $wrapper.find('[data-date]').sort(function(a, b) {
    return +a.dataset.date - +b.dataset.date;
    })
    .appendTo($wrapper);
});    
$('.filter__inner--item__popular').on("click",function() {
    var $wrapper = $('.content__cards');

    $wrapper.find('[data-popular]').sort(function(a, b) {
    return +a.dataset.popular - +b.dataset.popular;
    })
    .appendTo($wrapper);
}); 
$('.filter__inner--item__price').on("click",function() {
    var $wrapper = $('.content__cards');

    $wrapper.find('[data-price]').sort(function(a, b) {
    return +a.dataset.price - +b.dataset.price;
    })
    .appendTo($wrapper);
}); 
