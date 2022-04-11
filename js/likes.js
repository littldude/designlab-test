$(document).ready(function($) {
    for(let e of document.getElementsByClassName('likes-count')) {
        e.textContent = Math.floor(Math.random(1000) * 100);
    }
    
    $('.favourite').on("click",function(event) {
        event.preventDefault();
        let likeIcon = this.children[0];
        let likes = this.children[1];
        let count = likes.textContent;
        likes.classList.toggle('is_liked');
        let is_liked = likes.classList.contains('is_liked');
        likes.textContent = count - (is_liked ? -1 : 1);
        likeIcon.style.fill = is_liked ? '#2168DE' : '#ffffff';
    });

});
