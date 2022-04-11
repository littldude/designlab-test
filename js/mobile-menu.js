$('.header__mob').on("click",function() {
    let menu = this.parentNode.parentNode.children[0].children[2];
    let menuIcon = this.parentNode.parentNode.children[1];
    menu.classList.toggle('show');
    menuIcon.classList.toggle('header__mob--active');
    console.log(menuIcon)
    // console.log(menuCross.href);
});
