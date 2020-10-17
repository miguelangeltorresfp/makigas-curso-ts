// sumar

function sumar(m: number, n: number): number {
  let suma = m + n;
  console.log(`${m} + ${n} = ${suma}`);
  return suma;
}

let restar: (m: number, n: number) => number = function (
  m: number,
  n: number
): number {
  let resta = m - n;
  console.log(`${m} - ${n} = ${resta}`);
  return resta;
};

let multiplicar: (a: number, b: number, callback: (r: number) => void) => void;
multiplicar = (m, n, callback) => callback(m * n);

// multiplicar( A, B, function(result) {
//   console.log(A * B es result)
// })
console.log(
  multiplicar(4, 3, (result) => {
    console.log(`Resultado: ${result}`);
  })
);
