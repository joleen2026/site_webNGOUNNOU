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
        window.open(`mailto:poissonneriengounnou@gmail.com?subject=${subject}&body=${body}`, '_blank');
    });

