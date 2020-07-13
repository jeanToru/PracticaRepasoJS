let numero = parseFloat(prompt('Digite un número: '));

let mensaje = '';

let contador = 2;

let primo = true;

while (contador < numero) {
    if (numero % contador == 0) {
        primo = false;
    }
    contador++;
}

if (primo == true) {
    mensaje = 'El número es primo';
} else {
    mensaje = 'El número no es primo';
}
console.log(mensaje);