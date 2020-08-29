const bars = document.querySelector('.bars-icon');
const navContent = document.querySelector('.nav-mobile-content');
const navList = document.querySelector('.nav-mobile-list');
const navImg = document.querySelector('.nav-img-img');

bars.addEventListener('click', () => {

    if(navContent.classList.contains('nav-mobile-content')){
        navContent.classList.add('nav-mobile-content-activated');
        navContent.classList.remove('nav-mobile-content');
        navList.classList.add('nav-mobile-list-activated');
        navList.classList.remove('nav-mobile-list');
        bars.classList.add('bars-icon-activated');
        bars.classList.remove('bars-icon');
    } else {
        navContent.classList.remove('nav-mobile-content-activated');
        navContent.classList.add('nav-mobile-content');
        navList.classList.remove('nav-mobile-list-activated');
        navList.classList.add('nav-mobile-list');
        bars.classList.remove('bars-icon-activated');
        bars.classList.add('bars-icon');
    }
})

navImg.addEventListener('click', () => {
    if(!navContent.classList.contains('nav-mobile-content')){
        navContent.classList.remove('nav-mobile-content-activated');
        navContent.classList.add('nav-mobile-content');
        navList.classList.remove('nav-mobile-list-activated');
        navList.classList.add('nav-mobile-list');
        bars.classList.remove('bars-icon-activated');
        bars.classList.add('bars-icon');
    }
})