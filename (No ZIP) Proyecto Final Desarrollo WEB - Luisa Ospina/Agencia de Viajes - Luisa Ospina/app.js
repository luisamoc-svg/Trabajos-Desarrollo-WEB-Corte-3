
document.getElementById("btn-reservar").addEventListener("click", function() {
  
  
  const nombre = document.getElementById("nombre").value;
  const precioDestino = Number(document.getElementById("destino").value);
  const cantidadPersonas = Number(document.getElementById("personas").value);
  const contenedorResultado = document.getElementById("resultado");

  if (nombre.trim() === "") {
    contenedorResultado.innerHTML = `<div class="alert alert-danger">Por favor, escribe tu nombre.</div>`;
    return;
  }

  if (precioDestino === 0) {
    contenedorResultado.innerHTML = `<div class="alert alert-danger">Por favor, selecciona un destino.</div>`;
    return;
  }

  if (cantidadPersonas <= 0) {
    contenedorResultado.innerHTML = `<div class="alert alert-danger">La cantidad de personas debe ser mayor a 0.</div>`;
    return;
  }

 
  const totalPagar = precioDestino * cantidadPersonas;

  const totalFormateado = totalPagar.toLocaleString('es-CO');

  contenedorResultado.innerHTML = `
    <div class="alert alert-success">
      <h5 class="alert-heading">¡Reserva simulada con éxito!</h5>
      <p class="mb-1">Gracias <strong>${nombre}</strong>.</p>
      <p class="mb-1">Has reservado para <strong>${cantidadPersonas}</strong> persona(s).</p>
      <hr>
      <p class="mb-0 fs-5">Total a pagar: <strong>$${totalFormateado}</strong></p>
    </div>
  `;
});