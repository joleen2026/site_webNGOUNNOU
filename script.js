// script.js
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





// ==== SÉLECTION DES ÉLÉMENTS ====
const categoryFilter = document.getElementById('categoryFilter');
const productList = document.getElementById('productList');
const allProducts = Array.from(document.querySelectorAll('.product-card'));

// Recherche dans les champs du header
const searchInput1 = document.querySelector('#searchinput1 input');
const searchInput2 = document.querySelector('#searchinput2 input');

// ==== FONCTION DE FILTRAGE ====
function filterProducts() {
    const selectedCategory = categoryFilter.value.toLowerCase();
    const searchTerm1 = searchInput1.value.toLowerCase();
    const searchTerm2 = searchInput2.value.toLowerCase();

    // Combinaison des deux recherches texte
    const searchTerm = searchTerm1 || searchTerm2;

    // Vider le conteneur avant affichage
    productList.innerHTML = '';

    const filteredProducts = allProducts.filter(product => {
        const categoryMatch = selectedCategory === 'all' || product.dataset.category === selectedCategory;
        const textMatch = product.querySelector('h3').textContent.toLowerCase().includes(searchTerm)
                       || product.querySelector('p').textContent.toLowerCase().includes(searchTerm);
        return categoryMatch && textMatch;
    });

    filteredProducts.forEach(product => {
        productList.appendChild(product);
    });
}

// ==== ÉVÉNEMENTS ====
categoryFilter.addEventListener('change', filterProducts);
searchInput1.addEventListener('input', filterProducts);
searchInput2.addEventListener('input', filterProducts);

// ==== INITIALISATION ====
filterProducts();








// ====== FORMULAIRE CONTACT ======
document.getElementById('whatsappBtn').addEventListener('click', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const text = encodeURIComponent(
            `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`
        );
        window.open(`https://wa.me/237657662216?text=${text}`, '_blank');
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











