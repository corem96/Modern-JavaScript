const listaMsjs = document.getElementById('comments');

eventListeners();

function eventListeners() {
  document.querySelector('#form').addEventListener('submit', obtieneMsj);

  listaMsjs.addEventListener('click', borrarMsj);

  document.addEventListener('DOMContentLoaded', localStorageListo);
}

function obtieneMsj(e) {
  e.preventDefault(); //evita ejecutar la accion del form
  const msj = document.querySelector('#comment').value;

  adjuntaElementos(msj);

  agregaLocalStorage(msj);
}

function borrarMsj(e) {
  e.preventDefault();

  if(e.target.className === 'delete-msg') {
    e.target.parentElement.remove();
    borrarMsjLocalStorage(e.target.parentElement.innerText);;
  }
}

function localStorageListo() {
  let msjs;

  msjs = obtenerMsjs();
  
  msjs.forEach(function(msj) {
    adjuntaElementos(msj);
  });
}

function adjuntaElementos(msj) {
  const btnBorrar = document.createElement('a');
  btnBorrar.classList = 'delete-msg';
  btnBorrar.innerText = 'x';

  const li = document.createElement('li');
  li.innerText = msj;

  li.appendChild(btnBorrar);
  listaMsjs.appendChild(li);
}

function agregaLocalStorage(msj) {
  let msjs = obtenerMsjs();

  msjs.push(msj);
  localStorage.setItem('msjs', JSON.stringify(msjs));
}

function obtenerMsjs() {
  return !localStorage.getItem('msjs') ? [] : JSON.parse(localStorage.getItem('msjs'));
}

function borrarMsjLocalStorage(msj) {
  let msjs = obtenerMsjs();
  let msjBorrar = msj.substring(0, msj.length - 1);

  msjs.forEach(function(msj, index) {
    console.log(msj);
    if(msjBorrar === msj) {
      msjs.splice(index, 1);
    }
  });

  localStorage.setItem('msjs', JSON.stringify(msjs));
}