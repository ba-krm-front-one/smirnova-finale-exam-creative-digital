;(() => {
    function showMenu(event) {


        this.classList.toggle("ba-hamburger--open");
        this.parentNode.classList.toggle("ba-menu--open");

    }

    document.addEventListener('DOMContentLoaded',() => {
        document.querySelector('#hamburger').addEventListener('click', showMenu)

    });
})();
