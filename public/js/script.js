// const bgm = document.querySelector("#bgm");
// bgm.volume = 0.1;
const main = document.querySelector('main');
main.scrollIntoView();
/*==================================================== PRELOADER ====================================================*/
let loader = document.querySelector("#loader-wapper");
window.addEventListener("load", function() {
    loader.classList.add('fade-out');
    loader.parentElement.removeChild(loader);
    document.querySelector('.intro-wrapper').classList.add('fade-in');
});
const skipIntroBtn = document.querySelector('.skip-intro-btn');
skipIntroBtn.addEventListener('click', function() {
    document.querySelector('.scroll-container').classList.remove('hidden');
    document.querySelector(".intro-wrapper").parentElement.removeChild(introLoader);
    document.querySelector('.scroll-container').classList.add('fade-in');
    document.querySelector("#bgm").play();
})

/*==================================================== MOVING HEADER ====================================================*/
window.addEventListener("mousemove", parallax);

function parallax(e) {
    document.querySelectorAll(".object-mid").forEach(function(move) {
        let moving_value = move.getAttribute("data-value");
        let x = (e.clientX * moving_value) / 800;
        let y = (e.clientY * moving_value) / 800;
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
    document.querySelectorAll(".object-slow").forEach(function(move) {
        let moving_value = move.getAttribute("data-value");
        let x = (e.clientX * moving_value) / 2000;
        let y = (e.clientY * moving_value) / 2000;
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
    document.querySelectorAll(".object-fast").forEach(function(move) {
        let moving_value = move.getAttribute("data-value");
        let x = (e.clientX * moving_value) / 200;
        let y = (e.clientY * moving_value) / 200;
        move.style.transform = "translateX(-" + x + "px) translateY(-" + y + "px)";
    });
}
/*==================================================== ANIMATE ON SCROLL ====================================================*/
const aosAnimation = document.querySelectorAll('[data-aos]');
observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add('aos-animate');
        } else {
            entry.target.classList.remove('aos-animate');
        }
    });
});
aosAnimation.forEach(aosObject => {
    observer.observe(aosObject);
});
/*==================================================== ANIMATED CHARACTER ====================================================*/
const animatedGojo = bodymovin.loadAnimation({
    container: document.getElementById('gojo'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data/gojou/data-gojo.json'
})
const animatedYuji = bodymovin.loadAnimation({
    container: document.getElementById('yuji'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data/yuji/data-yuji.json'
})
const animatedMegumi = bodymovin.loadAnimation({
    container: document.getElementById('megumi'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data/megumi/data-megumi.json'
})
const animatedNobara = bodymovin.loadAnimation({
    container: document.getElementById('nobara'),
    rederer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data/nobara/data-nobara.json'
})
const animatedSukuna = bodymovin.loadAnimation({
        container: document.getElementById('sukuna'),
        rederer: 'svg',
        loop: true,
        autoplay: true,
        path: 'data/sukuna/data-sukuna.json'
    })
/*==================================================== NAVBAR ====================================================*/
$(document).ready(function() {
    $('main').scroll(function() {
        const link = $('.navbar a.dot');
        const top = $(window).scrollTop();

        $('.scroll-area').each(function() {
            var id = $(this).attr('id');
            var height = $(this).height();
            var offset = $(this).offset().top - 150;
            if (top >= offset && top < offset + height) {
                link.removeClass('active');
                $('.navbar').find('[data-scroll="' + id + '"]').addClass('active');
            }
        });
    });
});
//hide navbar
// window.onscroll(function() {
//     document.querySelector(".navbar").style.display = "none";
// });
/*==================================================== EMBEDDED VIDEO SHOW/HIDE BGM ====================================================*/
const playBtns = document.querySelectorAll('.play-btn');
for (const playBtn of playBtns) {
    playBtn.addEventListener('click', function() {
        document.querySelector('#bgm').muted = true;
    });
};

$(document).on('lity:close', function(event, instance) {
    document.querySelector('#bgm').muted = false;
});

/*==================================================== SLIDER ====================================================*/
$(document).ready(function() {
    $('.gameplay-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: true
    });
    $('.character-slider').slick({
        draggable: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        arrows: false,
        infinite: true,
        fade: true,
        cssEase: 'ease-in-out',
        touchThreshold: 100
    });
});