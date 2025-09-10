const searchicon1 = document.querySelector('#searchicon1');
const srchicon1 = document.querySelector('#srchicon1');
const search1 = document.querySelector('#searchinput1');

searchicon1.addEventListener('click', function(){
    search1.style.display = 'flex';
    searchicon1.style.display = 'none';
})

const searchicon2 = document.querySelector('#searchicon2');
const srchicon2 = document.querySelector('#srchicon2');
const search2 = document.querySelector('#searchinput2');

searchicon2.addEventListener('click', function(){
    search2.style.display = 'flex';
    searchicon2.style.display = 'none';
})

const bar = document.querySelector('.fa-bars');
const cross = document.querySelector('#hdcross');
const headerbar = document.querySelector('.headerbar');

bar.addEventListener('click', function(){
    setTimeout(() => {
        cross.style.display = 'block';
    }, 200);
    headerbar.style.right = '0%';
})

cross.addEventListener('click', function(){
    cross.style.display = 'none';
    headerbar.style.right = '-100%';
})

document.getElementById('whatsappBtn').addEventListener('click', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const text = encodeURIComponent(
            `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`
        );
        window.open(`https://wa.me/237691553027?text=${text}`, '_blank');
    });

    document.getElementById('gmailBtn').addEventListener('click', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const subject = encodeURIComponent('Contact depuis le site');
        const body = encodeURIComponent(
            `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`
        );
        window.open(`mailto:etsngounou0@gmail.com?subject=${subject}&body=${body}`, '_blank');
    });


// ====== RECHERCHE HEADER ======
function setupSearch(iconId, inputId) {
    const icon = document.querySelector(iconId);
    const inputContainer = document.querySelector(inputId);
    const inputField = inputContainer ? inputContainer.querySelector('input') : null;

    if (!icon || !inputContainer || !inputField) return;

    icon.addEventListener('click', () => {
        inputContainer.style.display = 'flex';
        icon.style.display = 'none';
        inputField.focus();
    });

    inputField.addEventListener('input', filterProducts);
}

setupSearch('#searchicon1', '#searchinput1');
setupSearch('#searchicon2', '#searchinput2');



// ====== FILTRE PRODUITS ======
const categoryFilter = document.getElementById('categoryFilter');
const products = document.querySelectorAll('.product-card');

function filterProducts() {
    const selectedCategory = categoryFilter ? categoryFilter.value.toLowerCase() : 'all';
    const searchQuery1 = document.querySelector('#searchinput1 input')?.value.toLowerCase() || '';
    const searchQuery2 = document.querySelector('#searchinput2 input')?.value.toLowerCase() || '';
    const searchQuery = searchQuery1 || searchQuery2;

    products.forEach(product => {
        const title = product.querySelector('h3')?.textContent.toLowerCase() || '';
        const description = product.querySelector('p')?.textContent.toLowerCase() || '';
        const matchCategory = selectedCategory === 'all' || product.dataset.category === selectedCategory;
        const matchSearch = !searchQuery || title.includes(searchQuery) || description.includes(searchQuery);

        product.style.display = (matchCategory && matchSearch) ? 'block' : 'none';
    });
}

if (categoryFilter) {
    categoryFilter.addEventListener('change', filterProducts);
}

// ====== INITIALISATION ======
filterProducts();


// script.js
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel .carousel-track');
  const slides = track ? Array.from(track.querySelectorAll('.testimonial')) : [];
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  if (!track || slides.length === 0) {
    console.warn('Carousel introuvable ou sans slides. Vérifie les classes .carousel, .carousel-track, .testimonial.');
    return;
  }

  let currentIndex = 0;

  function updateSlidePosition() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function goNext() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
  }

  function goPrev() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlidePosition();
  }

  nextBtn && nextBtn.addEventListener('click', goNext);
  prevBtn && prevBtn.addEventListener('click', goPrev);

  // Auto-play
  let timer = setInterval(goNext, 5000);

  // Pause au survol du carrousel
  const carousel = document.querySelector('.carousel');
  if (carousel) {
    carousel.addEventListener('mouseenter', () => clearInterval(timer));
    carousel.addEventListener('mouseleave', () => {
      clearInterval(timer);
      timer = setInterval(goNext, 5000);
    });
  }

  // Init
  updateSlidePosition();
});









