/* jshint esversion: 6 */

class Interfaz {
  constructor() {
    this.init();
  }

  init() {
    this.construirSelect();
  }

  construirSelect () {
    cotizador.obtenerMonedasApi()
      .then(monedas => {
        const arregloMonedas = monedas.monedas;
        const select = document.getElementById('criptomoneda');

        arregloMonedas.forEach(moneda => {
          const option = document.createElement('option');
          option.value = moneda.id;
          option.appendChild(document.createTextNode(moneda.name));
          select.appendChild(option);
        });
      });
  }
  mostrarMensaje (mensaje, clases) {
    const div = document.createElement('div');
    div.className = clases;
    div.appendChild(document.createTextNode(mensaje));
    
    const divMensaje = document.querySelector('.mensajes');
    divMensaje.appendChild(div);

    setTimeout(() => {
      document.querySelector('.mensajes div').remove();
    }, 2000);
  }
  mostrarResultado (resultado, moneda) {
    const resultadoAnterior = document.querySelector('#resultado > div');
    if (resultadoAnterior) {
      resultadoAnterior.remove();
    }

    this.mostrarSpinner();
    const etiquetaMoneda = `price_${moneda}`;
    const valor = resultado[etiquetaMoneda];
    const hora = new Date(resultado.last_uptated * 1000);
    
    let template = ``;
    template += `
      <div class="card cyan darken-3">
        <div class="card-content white-text">
          <span class="card-title">Resultado:</span>
          <p>Precio de ${resultado.name} a ${moneda}:</p>
          <p>$ ${valor}</p>
          <p>Última hora: ${resultado.percent_change_1h}%</p>
          <p>Últimas 24 horas: ${resultado.percent_change_24h}%</p>
          <p>Últimos 7 días: ${resultado.percent_change_7d}%</p>
          <p>Última actualización: ${hora}</p>
        </div>
      </div>
    `;
    
    setTimeout(() => {
      document.querySelector('#resultado').innerHTML = template;
      document.querySelector('.spinner img').remove();
    }, 2000);
  }
  mostrarSpinner () {
    const spinner = document.createElement('img');
    spinner.src = 'img/spinner.gif';
    document.querySelector('.spinner').appendChild(spinner);
  }
}