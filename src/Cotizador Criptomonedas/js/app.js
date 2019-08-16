/* jshint esversion: 6 */

const cotizador = new Cotizador();
const ui = new Interfaz();

const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', e => {
  e.preventDefault();

  const monedaSelect = document.getElementById('moneda');
  const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;
  
  const criptoMonedaSelect = document.getElementById('criptomoneda');
  const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

  if (!monedaSeleccionada || !criptoMonedaSeleccionada) {
    ui.mostrarMensaje('Ambos campos son obligatorios', 'deep-orange darken-4 card-panel');
  } else {
    cotizador.obtenerValoresApi(monedaSeleccionada, criptoMonedaSeleccionada)
      .then(data => {
        ui.mostrarResultado(data.resultado[0], monedaSeleccionada.toLowerCase());
      });
  }
});