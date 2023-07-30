
function calcularPagoMensual() {

    let monto = parseFloat(document.getElementById("monto").value);
    if (isNaN(monto)) {
        alert("Por favor, ingrese un monto válido.");
        return;
    }
    let periodoSeleccionado = parseInt(document.getElementById("periodo").value);
    if (isNaN(periodoSeleccionado)) {
        alert("Por favor, seleccione un período de tiempo.");
        return;
    }

    

    let periodos = [6, 12, 24];
    let intereses = [30 / 100, 50 / 100, 80 / 100];

    let indicePeriodo = periodos.indexOf(periodoSeleccionado);
    let tasaInteres = intereses[indicePeriodo];

    let cuotasMensual = (monto + (monto * tasaInteres)) / periodoSeleccionado;
    document.getElementById("pago-mensual-total").innerHTML = "Las cuotas son de: " + periodoSeleccionado + "x " + " $" + cuotasMensual.toFixed(2)
    let pagoTotal = monto + (monto * tasaInteres);
    document.getElementById("pago-total").innerHTML = "Total a pagar: $" + pagoTotal.toFixed(2);
    document.getElementById("tasa-interes").innerHTML = "Tasa de interés: " + (tasaInteres * 100) + "%";
}