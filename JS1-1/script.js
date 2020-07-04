let ano= prompt("Escriba un año");

if (parseInt(ano) % 4 == 0 && parseInt(ano) % 100 != 0) {
    console.log("El año es bisiesto");
} else {
    console.log("El año no es bisiesto");
}