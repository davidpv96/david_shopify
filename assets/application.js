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

  // Nuevo slider (solo texto)
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





// Decrease quantity
document.querySelectorAll(".btn-decrease").forEach(button => {
  button.addEventListener("click", function() {
    let key = this.getAttribute("data-key");
    let quantityInput = document.querySelector(`input[data-key="${key}"]`);
    let currentQuantity = parseInt(quantityInput.value);
    let newQuantity = currentQuantity - 1;

    // Actualizar la cantidad en la interfaz de usuario inmediatamente
    if (newQuantity >= 0) {
      quantityInput.value = newQuantity;
    }

    // Enviar la actualización al servidor
    if (newQuantity <= 0) {
      removeItemFromCart(key);
    } else {
      updateCart(key, newQuantity);
    }
  });
});

// Increase quantity
document.querySelectorAll(".btn-increase").forEach(button => {
  button.addEventListener("click", function() {
    let key = this.getAttribute("data-key");
    let quantityInput = document.querySelector(`input[data-key="${key}"]`);
    let currentQuantity = parseInt(quantityInput.value);
    let newQuantity = currentQuantity + 1;

    // Actualizar la cantidad en la interfaz de usuario inmediatamente
    quantityInput.value = newQuantity;

    // Enviar la actualización al servidor
    updateCart(key, newQuantity);
  });
});

// Remove item
document.querySelectorAll(".btn-remove").forEach(button => {
  button.addEventListener("click", function() {
    let key = this.getAttribute("data-key");
    removeItemFromCart(key);
  });
});

// Update cart function
function updateCart(key, quantity) {
  fetch(`/cart/change.js`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      id: key,
      quantity: quantity
    })
  })
  .then(response => response.json())
  .then(data => {
    if (quantity <= 0) {
      document.querySelector(`tr[data-key="${key}"]`).remove();
    } else {
      document.querySelector(`tr[data-key="${key}"] .item-price`).textContent = Shopify.formatMoney(data.items.find(item => item.key === key).line_price);
    }
    document.getElementById("cart-subtotal").textContent = Shopify.formatMoney(data.total_price);
  })
  .catch(error => console.error("Error updating cart:", error));
}

// Remove item from cart
function removeItemFromCart(key) {
  updateCart(key, 0);
}
});