;(() => {
    function showContent(event) {

        let content = document.querySelector('#about');

        let contentCoords = content.getBoundingClientRect().top + window.pageYOffset - content.offsetHeight;

        let banner = document.querySelector('.ba-about__banner');
        let text = document.querySelector('.ba-about__description');

        let currentScroll = window.pageYOffset;

        if (currentScroll > contentCoords) {
            banner.classList.add('ba-about__banner--visible');
            banner.classList.add('bounceInLeft');
            banner.classList.add('animated');
            text.classList.add('animated');
            text.classList.add('bounceInRight');

        }

        if (currentScroll < contentCoords) {
            banner.classList.remove('ba-about__banner--visible');
            banner.classList.remove('animated');
            banner.classList.remove('bounceInLeft');
            text.classList.remove('animated');
            text.classList.remove('bounceInRight');

        }
    }

    document.addEventListener('DOMContentLoaded',() => {
        document.addEventListener('scroll', showContent)

    });
})();



