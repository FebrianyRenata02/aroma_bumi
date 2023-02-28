// Toggle class active

const navbarNav = document.querySelector('.navbar-nav');

// ketika menu di klik
document.querySelector('#menu').
onclick = () => {
    navbarNav.classList.toggle('active');
}

// klik di luar sidebar untuk menghilangkan nav

const menu = document.querySelector('#menu');

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})

// Efek Ngetik

const txtElement = ['Best qualities from our local soil'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let Words = '';

(function mengetik() {

    if (count == txtElement.length) {
        count = 0;
    }

    currentTxt = txtElement[count];

    Words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-mengetik').textContent = Words;

    if (Words.length == currentTxt.length) {
        count++
        txtIndex = 0;
    }

    setTimeout(mengetik, 500);

})();