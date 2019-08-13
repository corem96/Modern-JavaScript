const cargarPost = document.querySelector('#cargar');

cargarPost.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    xhr.onload = () => {
        if(xhr.status === 200) {
            const resp = JSON.parse(xhr.responseText);

            let template = ``;
            resp.forEach(post => {
                template += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>`;
            });
            document.getElementById('listado').innerHTML = template;
        }
    };
    
    xhr.send();
});