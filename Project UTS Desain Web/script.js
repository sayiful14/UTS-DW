document.addEventListener('DOMContentLoaded', () => {
    let search = document.querySelector('.search-box');

    document.querySelector('#search-icon').onclick = () => {
        search.classList.toggle('active');
    }

    // Menutup navbar jika diklik di luar
    document.addEventListener('click', (event) => {
        if (!search.contains(event.target) && !document.querySelector('#search-icon').contains(event.target)) {
            search.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    let user = document.querySelector('.user');

    document.querySelector('#user-icon').onclick = () => {
        user.classList.toggle('active');
    }

    // Menutup navbar jika diklik di luar
    document.addEventListener('click', (event) => {
        if (!user.contains(event.target) && !document.querySelector('#user-icon').contains(event.target)) {
            user.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    let navbar = document.querySelector('.navbar');

    document.querySelector('#menu-icon').onclick = () => {
        navbar.classList.toggle('active');
    }

    // Menutup navbar jika diklik di luar
    document.addEventListener('click', (event) => {
        if (!navbar.contains(event.target) && !document.querySelector('#menu-icon').contains(event.target)) {
            navbar.classList.remove('active');
        }
    });
});

window.onscroll = () => {
    search.classList.remove('active');
    user.classList.remove('active');
    navbar.classList.remove('active');
}

let header = document.querySelector('header');

    window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

var swiper = new Swiper(".latest-products", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 0,
        },
        568: {
            slidesPerview: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    }
});