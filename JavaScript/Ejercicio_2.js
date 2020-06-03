//Luis Carlos Rojas Campos
var numero = prompt("Digite un numero para calcular su factorial");

console.log(ejercicio2(parseInt(numero)));
//Manager method that calculates the factorial of "x" number, receives a name and returns a list with the respective factorials of each iteration.
function ejercicio2 (a) {
  var cadenaNumeros = "!0 = 1\n",
      i;
  var factorial = 1;

  //Cycle that is responsible for calculating the factorial from 1 to number x.
  for (i = 1; i <= a; i++) {
    
    factorial = factorial * i;

    cadenaNumeros = cadenaNumeros + "!"+ i + " = " + factorial + "\n";
  }
  return cadenaNumeros;
} 