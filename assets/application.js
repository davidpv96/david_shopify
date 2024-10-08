// Put your application javascript here
document.addEventListener('DOMContentLoaded', function () {
  function initSwiper(selector, config) {
    return new Swiper(selector, config);
  }

  // Slider existente
  initSwiper(".mySwiper", {
    slidesPerView: 1.2,
    spaceBetween: 20,
    breakpoints: {
      640: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });

  // Nuevo slider (solo textoS)
  initSwiper(".myTextSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 3000,
    },
  });

  // Slider de testimonios
  initSwiper(".myTestimonialsSwiper", {
    slidesPerView: 1.5, // Muestra 1.5 slides en pantallas pequeñas
    spaceBetween: 20, // Espacio entre slides
    loop: true, // Para un deslizamiento infinito
    breakpoints: {
        640: {
            slidesPerView: 1.5, // 1.5 slides en pantallas pequeñas
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2.5, // 2.5 slides en pantallas medianas
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4, // 4 slides en pantallas grandes
            spaceBetween: 20,
        },
    },
  });

  // Nuevo slider para características
  initSwiper(".myFeatureSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: false, // Asegúrate de que no esté en loop
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
  });

  // Nuevo slider para productos
  initSwiper(".productSwiper", {
    slidesPerView: 1.5,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: false,
    breakpoints: {
        640: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
    },
  });

});