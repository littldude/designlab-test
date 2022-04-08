$(document).ready(function($) {
    let timesClicked = 0;
    $('#filter-show').on("click",function(event) {
        timesClicked++;
        console.log(timesClicked)
        if (timesClicked % 2 == 0) {
            document.getElementById('filter-block').style.display = 'block';
            document.getElementById('filter-show').textContent = 'Скрыть фильтр';
        }
        else {
            document.getElementById('filter-block').style.display = 'none';
            document.getElementById('filter-show').textContent = 'Показать фильтр';
        }
        // let key = event.target.id;
        // console.log(key)
        // document.getElementById('therapy__page').style.display = 'none';
        
        
    });
});