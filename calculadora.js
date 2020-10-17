// sumar
function sumar(m, n) {
    var suma = m + n;
    console.log(m + " + " + n + " = " + suma);
    return suma;
}
var restar = function (m, n) {
    var resta = m - n;
    console.log(m + " - " + n + " = " + resta);
    return resta;
};
var multiplicar;
multiplicar = function (m, n, callback) { return callback(m * n); };
// multiplicar( A, B, function(result) {
//   console.log(A * B es result)
// })
console.log(multiplicar(4, 3, function (result) {
    console.log("Resultado: " + result);
}));
