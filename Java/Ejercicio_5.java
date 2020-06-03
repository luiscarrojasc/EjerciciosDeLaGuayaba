//Luis Carlos Rojas Campos
class Main {
  public static void main(String[] args) {

    int[] myArray = {1,2,2,5,4,6,7,8,8,8};
    String texto = ocurrencia(myArray);

    System.out.println(texto);
  }
  /* Method in charge of searching the longest consecutive 
  sequence of numbers, does not count the number of times the 
  same number appears throughout the list
  Receive the list of numbers and return the number and the times it appears in a row.*/
  private static String ocurrencia (int[] num) {
    int tamanno = num.length;
    //Check that the list is not empty.
    if (tamanno <= 0) {
      return "Secuencia vacia";
    }

    int anterior = num[0];
    int mayor = num[0];
    int repeticiones = 1;
    int repeticionesMayor = 1;

    for (int i = 1; i < tamanno; i++){
      //If the number is the same adds a repetition.
      if (num[i] == anterior) {
        repeticiones = repeticiones + 1;
      } else {
        /*If the number is not greater, check that the previously 
        saved sequence is not less, if it is, update it by the current one.*/
        if (repeticionesMayor < repeticiones) {
          mayor = anterior;
          repeticionesMayor = repeticiones;
        }
        
        repeticiones = 1;
      }
      anterior = num[i];
    }
    //Check that the last number on the list does not have a larger sequence.
    if (repeticionesMayor < repeticiones) {
      mayor = anterior;
      repeticionesMayor = repeticiones;
    }    

    return "Numero: " + mayor + "\nRepeticiones consecutivas: " + repeticionesMayor;
  }

}