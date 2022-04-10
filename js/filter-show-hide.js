$(document).ready(function($) {
    let timesClicked = 0;
    document.getElementById('filter__button').style.color = '#2168DE';
    $('.filter__button').on("click",function(event) {
        timesClicked++;
        if (timesClicked % 2 == 0) {
            document.getElementById('filter-block').style.display = 'block';
            document.getElementById('link--filter').textContent = 'Скрыть фильтр';
            document.getElementById('filter__button').style.color = '#2168DE';
            
        }
        else {
            document.getElementById('filter-block').style.display = 'none';
            document.getElementById('link--filter').textContent = 'Показать фильтр';
            document.getElementById('filter__button').style.color = '#333333';
        }
    });
});