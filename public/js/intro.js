/*==================================================== BGM VOLUME ====================================================*/
const introBgm = document.querySelector("#intro-bgm");
introBgm.volume = 0.1; 

TweenMax.staggerFrom(
    ".intro-img > img", 
    0.8,
    {
        ease: Power3.easeInOut,
        opacity: "0",
    },
    2
);
TweenMax.staggerTo(
    ".intro-img > img",
    0.8,
    {
        ease: Power3.easeInOut,
        delay: 1.2,
        opacity: "0",
    },
    2
);

TweenMax.staggerFrom(
    ".blocks > li",
    3,
    {
        x: "-1600",
        delay: 4.2,
        ease: Expo.easeInOut,
    },
    0.16
);
TweenMax.staggerTo(
    ".blocks > li",
    2.5,
    {
        x: "1600",
        delay: 6.8,
        ease: Expo.easeInOut,
    },
    0.2
);
let textWrapper = document.querySelector(".first-script");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
);

let secondWrapper = document.querySelector(".second-script");
secondWrapper.innerHTML = secondWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
);

anime.timeline().add({
    targets: ".first-script .letter",
    opacity: [0, 1],
    translateY: [80, 0],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1500,
    delay: (el, i) => 8400 + 40 * i,
}).add({
    targets: ".first-script .letter",
    opacity: [1, 0],
    translateY: [0, 80],
    translateZ: 100,
    easing: "easeInExpo",
    duration: 1600,
}).add({
    targets: ".second-script .letter",
    opacity: [0, 1],
    translateY: [80, 0],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1500,
    delay: (el, i) => 0 + 40 * i,
}).add({
    targets: ".second-script .letter",
    opacity: [1, 0],
    translateY: [0, 80],
    translateZ: 100,
    easing: "easeInExpo",
    duration: 1600,
});

TweenMax.staggerFrom(
    ".gojo-scripts > div",
    0.8,
    {
        x: "-60",
        ease: Power2.easeInOut,
        delay: 15.4,
        opacity: "0",
    },
    2
);
TweenMax.staggerTo(
    ".gojo-scripts > div",
    0.8,
    {
        x: "60",
        ease: Power2.easeInOut,
        delay: 16.6,
        opacity: "0",
    },
    2
);
TweenMax.staggerFrom(
    ".gojo-hollow-purple > img",
    0.1,
    {
        ease: Power3.easeInOut,
        delay: 21.5,
        opacity: "0",
    },
    0.25
);

TweenMax.staggerTo(
    ".gojo-hollow-purple > img",
    0.1,
    {
        ease: Power3.easeInOut,
        delay: 21.7,
        opacity: "0",
    },
    0.25
);
/*==================================================== INTRO-BODY NAVIGATER ====================================================*/
let introLoader = document.querySelector(".intro-wrapper");
const bgm = document.querySelector("#bgm");
bgm.volume = 0.1;
window.addEventListener("load",function(){
    introBgm.play();
    setTimeout(function(){
        document.querySelector('.scroll-container').classList.remove('hidden');
        introLoader.parentElement.removeChild(introLoader);                
        document.querySelector('.scroll-container').classList.add('fade-in');
        bgm.play();  
    },23000);         
});   