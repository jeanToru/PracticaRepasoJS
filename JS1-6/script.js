let numero = parseFloat(prompt('Digite un número: '));

let mensaje = '';

if (numero < 2 || (numero % 2 == 0 && numero != 2)) {
    mensaje = 'El número no es primo';
} else {
    mensaje = 'El número es primo';
}
console.log(mensaje);