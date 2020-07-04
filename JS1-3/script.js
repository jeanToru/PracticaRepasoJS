let linea = prompt('Digite una palabra');

let invertida = '';

let tamano = linea.length;

while (tamano >= 0) {
    invertida = invertida + linea.charAt(tamano);
    tamano--;
}
console.log(invertida);