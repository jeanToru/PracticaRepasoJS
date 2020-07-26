let info = prompt('Ingrese una frase');

let sinEspacios = '';

for (let i = 0; i < info.length; i++) {
    if (info.charAt(i) != ' ') {
        sinEspacios += info.charAt(i);
    }
}
console.log(sinEspacios);
