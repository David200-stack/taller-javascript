// main.js
import { pedirDatos } from './pedirDatos.js';

const botones = document.querySelectorAll('.calcular-btn');

botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    const precio = parseFloat(boton.dataset.precio);
    pedirDatos(precio);
  });
});