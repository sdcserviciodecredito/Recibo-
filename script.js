function generar() {
  const destino = document.getElementById("destino").value;
  const cuenta = document.getElementById("cuenta").value;
  const monto = document.getElementById("monto").value;
  const concepto = document.getElementById("concepto").value;
  const moneda = document.getElementById("moneda").value;
  const fechaInput = document.getElementById("fechaManual").value;

  const fecha = new Date(fechaInput);

  const fechaTexto = fecha.toLocaleString("es-ES");

  document.getElementById("resDestino").innerText = destino;
  document.getElementById("resCuenta").innerText = cuenta;
  document.getElementById("resConcepto").innerText = concepto;
  document.getElementById("resMonto").innerText = moneda + " " + monto;
  document.getElementById("resFecha").innerText = fechaTexto;
  document.getElementById("fecha").innerText = fechaTexto;

  document.getElementById("folio").innerText =
    Math.floor(100000000 + Math.random() * 900000000);

  document.getElementById("formulario").classList.add("hidden");
  document.getElementById("resultado").classList.remove("hidden");
    }
