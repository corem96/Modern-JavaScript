/*jshint esversion: 6 */
cargarDatos = () => {
    const xhr = new XMLHttpRequest();    
    //abrir conexión
    xhr.open('GET', 'datos.txt', true);

    xhr.onload = () => {
        if(xhr.status === 200 || xhr.status === 304) {
            document.getElementById('listado').innerHTML = `<h1>${xhr.responseText}</h1>`;
        }
    };

    xhr.send();
};

document.getElementById('cargar').addEventListener('click', cargarDatos);
