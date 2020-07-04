let texto = prompt('Digite un texto');

let caracter = prompt('Digite un caracter');

let contador = 0;

let incluida = 0;

while (contador <= texto.length) {
    if (texto[contador] == caracter) {
        incluida++;
    }
    contador++;
}

console.log(`Cantidad de veces que caracter esta en el texto es ${incluida}`);