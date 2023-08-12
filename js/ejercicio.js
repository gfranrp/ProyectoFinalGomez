//Evento para que se inicie la funcion

let calcularPrestramo = document.getElementById("Calcular");
calcularPrestramo.addEventListener("click", calcularPagoMensual)

//______________________
//Funcion para calcular pago mensual
function calcularPagoMensual() {
    //Monto que introduce el usuario, si no es un monto numerico pide que se ingrese un monto valido, lo mismo con el periodo de tiempo

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
    //Arreglos con el periodo de tiempo e intereses de cada prestamo.
    let periodos = [6, 12, 24, 36];
    let intereses = [40 / 100, 60 / 100, 80 / 100, 100 / 100];
    //Calculo de costos dependiendo que selecciona el usuario
    let indicePeriodo = periodos.indexOf(periodoSeleccionado);
    let tasaInteres = intereses[indicePeriodo];
    //DOM agregando con sus respectivos resultados.
    let cuotasMensual = (monto + (monto * tasaInteres)) / periodoSeleccionado;
    document.getElementById("pago-mensual-total").innerHTML = "Las cuotas son de: " + periodoSeleccionado + "x " + " $" + cuotasMensual.toFixed(2)
    let pagoTotal = monto + (monto * tasaInteres);
    document.getElementById("pago-total").innerHTML = "Total a pagar: $" + pagoTotal.toFixed(2);
    document.getElementById("tasa-interes").innerHTML = "Tasa de interés: " + (tasaInteres * 100) + "%";

    // Guardar los datos en el almacenamiento local
    let datos = {
        monto: monto,
        periodo: periodoSeleccionado,
        tasaInteres: tasaInteres,
        cuotasMensual: cuotasMensual,
        pagoTotal: pagoTotal
    };

    localStorage.setItem("datosPrestamo", JSON.stringify(datos));
    // Cargar los datos del almacenamiento local al cargar la página
    window.addEventListener("load", function () {
        let datosGuardados = localStorage.getItem("datosPrestamo");
        if (datosGuardados) {
            let datos = JSON.parse(datosGuardados);
            document.getElementById("monto").value = datos.monto;
            document.getElementById("periodo").value = datos.periodo;
            document.getElementById("pago-mensual-total").innerHTML = "Las cuotas son de: " + datos.periodo + "x " + " $" + datos.cuotasMensual.toFixed(2);
            document.getElementById("pago-total").innerHTML = "Total a pagar: $" + datos.pagoTotal.toFixed(2);
            document.getElementById("tasa-interes").innerHTML = "Tasa de interés: " + (datos.tasaInteres * 100) + "%";
        }
    });

}