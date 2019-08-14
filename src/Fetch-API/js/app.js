cargarTxt = () => {
    fetch('datos.txt')
        .then(res => {
            return res.text();
        })
        .then(data => {
            document.getElementById('resultado').innerHTML = data;
        });
};

cargarJson = () => {
    fetch('empleados.json')
        .then(res => {
            return res.json()
        })
        .then(data => {
            let temp = '';
            data.forEach(empleado => {
                temp += `
                    <li>${empleado.nombre} - ${empleado.puesto}</li>
                `;
            });
            document.getElementById('resultado').innerHTML = temp;
        });
};

cargarApi = () => {
    fetch('https://picsum.photos/v2/list')
        .then(res => {
            return res.json();
        })
        .then(imagenes => {
            let temp = '';
            imagenes.forEach(imagen => {
                temp = `
                    <li>
                        <img src="${imagen.download_url}" alt="${imagen}" height="200"/>
                        <p><sub>${imagen.author}</<sub></p>
                    </li>
                `;
            });
            document.getElementById('resultado').innerHTML = temp;
        });
};


document.getElementById('txtBtn')
    .addEventListener('click', cargarTxt);
document.getElementById('jsonBtn')
    .addEventListener('click', cargarJson);
document.getElementById('apiBTN')
    .addEventListener('click', cargarApi);