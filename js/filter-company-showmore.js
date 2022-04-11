$('#show-more').click(function (event) {
    event.preventDefault();
    let textMore = this.parentNode.children[1];
    textMore.classList.toggle('filter-companies');
    document.getElementById('show-more').textContent = 'Скрыть все'
});
