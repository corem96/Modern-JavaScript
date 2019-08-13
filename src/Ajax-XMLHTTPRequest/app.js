/*jshint esversion: 6 */
const btn1 = document.getElementById('boton1');

btn1.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'empleado.json', true);
    xhr.onload = () => {
        if(xhr.status === 200 || xhr.status === 304){
            const persona = JSON.parse(xhr.responseText);
            let htmlTemplate = `
            <ul>
                <li>${persona.id}</li>
                <li>${persona.nombre}</li>
                <li>${persona.empresa}</li>
                <li>${persona.puesto}</li>
            </ul>`;
            
            document.getElementById('empleado').innerHTML = htmlTemplate;
        }
    };
    xhr.send();
});

const btn2 = document.getElementById('boton2');
btn2.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'empleados.json', true);
    xhr.onload = () => {
        if(xhr.status === 200 || xhr.status === 304){
            const personal = JSON.parse(xhr.responseText);
            
            let htmlTemplate = ``;
            personal.forEach(persona => {
                htmlTemplate += `
                <ul>
                    <li>${persona.id}</li>
                    <li>${persona.nombre}</li>
                    <li>${persona.empresa}</li>
                    <li>${persona.puesto}</li>
                </ul>`;
            });
            
            document.getElementById('empleados').innerHTML = htmlTemplate;
        }
    };
    xhr.send();
});