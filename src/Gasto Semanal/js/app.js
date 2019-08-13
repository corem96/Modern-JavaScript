/*jshint esversion: 6 */
const presupuestoUsiario = prompt('Define el presupuesto quincenal');
const formulario= document.getElementById('agregar-gasto');
let cantidadPresupuesto;

class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }

    presupuestoRestante(cantidad = 0) {
        return this.restante -= Number(cantidad);
    }
}

class Interfaz {
    insertarPresupuesto(cantidad) {
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');

        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }
    imprimirMensaje(mensaje, tipo) {
        const div = document.createElement('div');
        div.classList.add('text-center', 'alert');

        if(tipo === 'error') {
            div.classList.add('alert-danger');

        } else {
            div.classList.add('alert-success');
        }
        div.appendChild(document.createTextNode(mensaje));
        document.querySelector('.primario').insertBefore(div, formulario);

        setTimeout(() => {
            document.querySelector('.primario .alert').remove();
            formulario.reset();
        }, 2000);
    }
    agregarGastoListado(nombre, cantidad) {
        const gastos = document.querySelector('#gastos ul');
        const li = document.createElement('li');

        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            ${nombre}
            <span class="badge badge-primary badge-pill">$ ${cantidad}</span>
        `;
        gastos.appendChild(li);
    }
    presupuestoRestante(cantidad) {
        const restante = document.querySelector('span#restante');
        const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad);

        restante.innerHTML = `${presupuestoRestanteUsuario}`;
        this.comprobarPresupuesto();
    }
    comprobarPresupuesto() {
        const presupuestoTotal = cantidadPresupuesto.presupuesto;
        const presupuestoRestante = cantidadPresupuesto.restante;
        const restante = document.querySelector('.restante');
        
        if((presupuestoTotal / 4) > presupuestoRestante) {
            restante.classList.remove('alert-success', 'alert-warning');
            restante.classList.add('alert-danger');            
        } else if((presupuestoTotal / 2) > presupuestoRestante) {
            restante.classList.remove('alert-success');
            restante.classList.add('alert-warning');
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    if(!presupuestoUsiario) {
        window.location.reload();
        return;
    }

    cantidadPresupuesto = new Presupuesto(presupuestoUsiario);
    
    const ui = new Interfaz();
    ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
});

formulario.addEventListener('submit', e => {
    e.preventDefault();

    const nombreGasto = document.querySelector('#gasto').value;
    const cantidadGasto = document.querySelector('#cantidad').value;

    const ui = new Interfaz();
    
    if(!nombreGasto || !cantidadGasto) {
        ui.imprimirMensaje('Ocurrió un error', 'error');
    } else {
        ui.imprimirMensaje('gasto agregado', 'correcto');
        ui.agregarGastoListado(nombreGasto, cantidadGasto);
        ui.presupuestoRestante(cantidadGasto);
    }
});