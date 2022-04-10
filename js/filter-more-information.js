
$('.filter-wrapper__header').click(function () {
    let textMore = this.parentNode.children[1];
    let arrow = this.children[1];
    textMore.classList.toggle('not-active');
    arrow.classList.toggle('arrow-not-active');
});


