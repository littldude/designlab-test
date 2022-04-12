$('.button--content').on("click",function(event) {
    event.preventDefault(); 
    let collectionOfItems = document.getElementById('content__cards').innerHTML;
    let dest = document.getElementById('content__cards'); 
    console.log(collectionOfItems)
    for (let i = 0; i < 1; i++) {
        dest.innerHTML += collectionOfItems;
    }
});