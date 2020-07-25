let ano= parseInt(prompt("Escriba un año"));

if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
    console.log("El año es bisiesto");
} else {
    console.log("El año no es bisiesto");
}