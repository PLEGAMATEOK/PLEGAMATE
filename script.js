```javascript
const botonesComprar = document.querySelectorAll(".comprar");

botonesComprar.forEach(function (boton) {
boton.addEventListener("click", function () {
const producto = boton.getAttribute("data-producto");

alert(
"Has seleccionado: " +
producto +
". Próximamente podrás completar el pago."
);
});
});

const formulario = document.getElementById("formularioContacto");

if (formulario) {
formulario.addEventListener("submit", function (evento) {
evento.preventDefault();

const nombre = document.getElementById("nombre").value;

alert(
"Gracias, " +
nombre +
". Tu mensaje ha sido enviado correctamente."
);

formulario.reset();
});
}
```
