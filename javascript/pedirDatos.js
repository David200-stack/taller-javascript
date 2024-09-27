// pedirDatos.js
import { mostrarPrecio } from './mostrarPrecio.js';

export function pedirDatos(precio) {
  const producto = prompt("Ingrese el nombre del producto (Ensalada, Frutas, Smoothie): ");
  let cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar: "));

  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Por favor, ingrese una cantidad válida.");
    return;
  }

  const precioTotal = precio * cantidad;
  mostrarPrecio(producto, precioTotal);
}