/*==================================================== BGM VOLUME ====================================================*/
const bgm = document.getElementById("bgm");
bgm.volume = 0.1;
/*==================================================== STICKY MENUBAR ====================================================*/
window.onscroll = function() {stickyFunction()};
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;
function stickyFunction() {
    if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    } else {
    navbar.classList.remove("sticky");
    }
} 