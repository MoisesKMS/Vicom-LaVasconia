const acordeon = document.querySelector('#acordeon')
acordeon.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('acordeon__heading')) {
        // e.target.children[1].classList.toggle('rotate');
        if (e.target.children[1].textContent == '+') {
            e.target.children[1].textContent = '-';
        } else {
            e.target.children[1].textContent = '+';
        }
        let value = e.target.parentElement;
        value.classList.toggle('scale');
    }
})