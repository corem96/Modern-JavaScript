/*jshint esversion: 6 */

cargarNombres = e => {
    e.preventDefault();
    let url = `http://uinames.com/api/?`;

    const origen = document.querySelector('#origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.querySelector('#genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    const cantidad = document.getElementById('numero').value;

    if(origenSeleccionado) {
        url += `region=${origenSeleccionado}&`;
    }
    if(generoSeleccionado) {
        url += `gender=${generoSeleccionado}&`;
    }
    if(cantidad) {
        url += `amount=${cantidad}`;
    }

    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);

    xhr.onload = () => {
        if(xhr.status === 200) {
            const nombres = JSON.parse(xhr.responseText);

            let htmlNombres = `<h2>Nombres Generados</h2>`;
            htmlNombres += `<ul class="lista">`;

            nombres.forEach(nombre => {
                htmlNombres += `
                    <li>${nombre.name}</li>
                `;
            });

            htmlNombres += `</ul>`;

            document.querySelector('#resultado').innerHTML = htmlNombres;
        }
    };

    xhr.send();
};

document.querySelector('#generar-nombre')
    .addEventListener('submit', cargarNombres);