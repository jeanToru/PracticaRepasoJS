let numero = parseFloat(prompt('Digite un número: '));

let mensaje = '';

if (numero % 1 == 0 || numero % numero == 0) {
    mensaje = 'El número es primo';
}else{
    mensaje = 'El número no es primo';
}
console.log(mensaje);