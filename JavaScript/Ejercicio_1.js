// Luis Carlos Rojas Campos
var a = [2, 3, 4, 6];
var b = [123, 67, 890, 4];
var c = [2, 3, 7, 9, 4, 5, 6, 9, 12];

console.log(ejercicio1(a));
console.log(ejercicio1(b));
console.log(ejercicio1(c));

//Method in charge of multiplying the numbers in the list, except for the one in which the counter is, receives a list of numbers and returns a list of results.
function ejercicio1 (a) {
  var numeros = "",
      i;
   //This "for" is responsible for going through the list to multiply the other values.
  for (i = 0; i < a.length; i++) {
    var multiplicando = 1;
    //This "for" searches for the other values other than the position to multiply and add them to the result.
    for (j = 0; j < a.length; j++) { 
      //This "if" prevents the same value that we are in from multiplying
      if (i != j) 
        multiplicando = multiplicando * a[j];
    }
    //This “if” is in charge of concatenating the texts, and if it is the last one, it gives it a different format.
    if (i == a.length - 1){
      numeros = numeros + multiplicando;
    } else {
      numeros = numeros + multiplicando + ", ";
    }    
  }
  return numeros;
}