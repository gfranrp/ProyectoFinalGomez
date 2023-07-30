function preguntarEdad() {
    let edad = prompt("Por favor, ingresa tu edad:");
    return parseInt(edad);
}
let edadValida = false;
while (!edadValida) {
    let edadIngresada = preguntarEdad();

    if (!isNaN(edadIngresada)) {
        edadValida = true;
        if (edadIngresada >= 18) {
            alert("Eres mayor de 18 años. ¡Bienvenido a la página!"); 
        } else {
            alert("Lo siento, eres menor de 18 años. No puedes acceder a esta página.");
        }
    } else {
        alert("Por favor, ingresa una edad válida (un número).");
    }
}


let numero1 = parseInt( prompt("Cuanto dinero vas a pedir") );
let numero2 = prompt("Elije las cuotas: `12´ ");
while (numero2 != 12) if (numero2 != 12) {
    alert ("No se puede ejecutar el prestamo, vuelve a intentarlo"); return numero1;  
    } 
    else {
let porcentajeCuotas = (numero1*(50/100)) ;
let cuotas=  ((porcentajeCuotas + numero1)/12)
let restaresultado = alert("Sus cuotas son de 12x " + cuotas) ;
let totalDevol = alert ("Debe devolver en total " + (cuotas*12) )
}



