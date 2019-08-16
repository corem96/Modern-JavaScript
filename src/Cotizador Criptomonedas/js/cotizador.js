/*jshint esversion: 6 */

class Cotizador {
  async obtenerMonedasApi() {
    const urlObtenerMonedas = await fetch('https://api.coinmarketcap.com/v1/ticker/');

    const monedas = await urlObtenerMonedas.json();

    return {
      monedas
    };
  }
  async obtenerValoresApi(moneda, criptomoneda) {
    const urlConvertir = await fetch(
      `https://api.coinmarketcap.com/v1/ticker/${criptomoneda}/?convert=${moneda}`
    );

    const resultado = await urlConvertir.json();

    return {
      resultado
    };
  }
}