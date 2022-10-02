const swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    speed: 600,
});

let burgerButton = document.querySelector(".header-nav__burger-btn");

let burgerMenu = document.querySelector(".burger-menu");

burgerButton.addEventListener("click", function (e) {
    e.preventDefault();
    burgerMenu.classList.toggle("_active");
    document.body.classList.toggle("_fixed");
});

const menuLinks = document.querySelectorAll("[data-goto]");

if (menuLinks.length > 0) {
    menuLinks.forEach((menuLink) => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        if (burgerMenu.classList.contains("_active")) {
            burgerMenu.classList.remove("_active");
            document.body.classList.remove("_fixed");
        }
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth",
            });
            e.preventDefault();
        }
    }
}
