
window.addEventListener('scroll',() => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 1) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
});

