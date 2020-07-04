let numero = 0;

const secreto = 45;

let condicion = 1;

let msj = 'Fallo'

while (condicion != 0) {
    numero = parseInt(prompt('Adivine un numero del 1 a 100'));
    if (numero == 0 || numero == 45) {
        condicion = 0;
        if (numero == secreto) {
            console.log('Ganaste');
        }else{
            console.log('Abandonaste');
        }

    }else if(numero < secreto){
        console.log(msj + '  El numero que ingreso es menor al que debe adivinar');
        condicion++;
    }else if(numero > secreto){
        console.log(msj + '  El numero que ingreso es mayor al que debe adivinar');
        condicion++;
    }
}
