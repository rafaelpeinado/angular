var minhaVar = 'minha variável'; // como é feito no JavaScript puro, o vanilla
function minhaFunc(x, y) {
    return x + y;
}
// ES 6 OU ES 2015
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; }); // ES 2015
numeros.map(function (valor) {
    return valor * 2;
});
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
// no Javascript puro é possível
var n1 = 'sdfsdf';
n1 = 4;
// No TypeScript não
