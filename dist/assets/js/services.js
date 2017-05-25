;(() => {
    function showContent(event) {

        let content = document.querySelector('#services');

        let contentCoords = content.getBoundingClientRect().top + window.pageYOffset - content.offsetHeight;



        let currentScroll = window.pageYOffset;

        if (currentScroll > contentCoords) {
            content.classList.add('ba-services--visible');
            content.classList.add('animated');
            content.classList.add('bounceInUp');



        }

        if (currentScroll < contentCoords) {
            content.classList.remove('ba-services--visible');
            content.classList.remove('animated');
            content.classList.remove('bounceInUp');

        }
    }

    document.addEventListener('DOMContentLoaded',() => {
        document.addEventListener('scroll', showContent)

    });
})();

