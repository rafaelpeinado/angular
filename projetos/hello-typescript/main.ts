var minhaVar = 'minha variável'; // como é feito no JavaScript puro, o vanilla

function minhaFunc(x, y) {
    return x + y;
}

// ES 6 OU ES 2015
let num = 2;
var PI = 3.14;

var numeros = [1, 2, 3];
numeros.map(function(valor) {
    return valor * 2;
});

numeros.map(valor => valor * 2); // ES 2015
numeros.map(valor => {
    return valor * 2;
});

class Matematica {
    soma(x, y) {
        return x + y;
    }
}


