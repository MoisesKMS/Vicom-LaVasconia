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

document.addEventListener('DOMContentLoaded', eventos);

function eventos() {
    personaje();
}


// personaje
async function personaje() {
    const imagen = document.querySelector('.personaje__imagen');
    const nombre = document.querySelector('#personaje-nombre');
    const genero = document.querySelector('#personaje-genero');
    const episodios = document.querySelector('#personaje-episodios');

    const url = 'https://rickandmortyapi.com/api/character/2';
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    imagen.src = resultado.image;
    nombre.textContent = resultado.name;
    genero.textContent = resultado.gender;
    for (let i = 0; i < 5; i++) {
        episodios.textContent += resultado.episode[i] + '\n';
    }

}