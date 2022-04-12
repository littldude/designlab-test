$(document).ready(function($) {
    let textFilter = document.getElementById('link--filter');
    textFilter.textContent = 'Скрыть фильтр';
    $('.filter__button').on("click",function(event) {
        let filterBlock = this.parentNode.parentNode.children[4].children[1];
        let filterButton = this.parentNode.children[1];
        console.log(filterBlock)
        filterBlock.classList.toggle('is_active');
        let is_active = filterBlock.classList.contains('is_active');
        filterBlock.style.display = (!is_active ? 'block' : 'none');
        textFilter.textContent = (!is_active ? 'Скрыть фильтр' : 'Показать фильтр');
        filterButton.style.color = (!is_active ? '#2168DE' : '#333333');
    });
    
    $('.filter-block__header').on("click",function(event) {
        let filterBlock = this.parentNode;
        filterBlock.classList.toggle('is_active');
        let is_active = filterBlock.classList.contains('is_active');
        filterBlock.style.display = (!is_active ? 'block' : 'none');
    });
});

