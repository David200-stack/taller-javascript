// mostrarPrecio.js
export function mostrarPrecio(producto, precioTotal) {
    const divResultado = document.getElementById('resultado');
    divResultado.innerHTML = `<p>Has seleccionado: <strong>${producto}</strong><br> El precio total es: <strong>$${precioTotal.toFixed(2)}</strong></p>`;
  }