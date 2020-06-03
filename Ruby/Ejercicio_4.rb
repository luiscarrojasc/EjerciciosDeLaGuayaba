# Luis Carlos Rojas Campos
#method that receives a list of numbers with values from 1 to 5 only, adds the number of times each number is repeated in the list.
def histograma (numeros)
  uno = "1: "
  dos = "2: "
  tres = "3: "
  cuatro = "4: "
  cinco = "5: "
  #Recorre la lista, dependiendo del valor lo suma a la variable correspondiente. 
 numeros.each do |elemento|
    if elemento == 1 
      uno = uno  + "* " 
    end
    if elemento == 2 
      dos = dos  + "* " 
    end
    if elemento == 3 
      tres = tres  + "* " 
    end
    if elemento == 4 
      cuatro = cuatro  + "* " 
    end
    if elemento == 5 
      cinco = cinco  + "* " 
    end
  end
  return uno + "\n" + dos + "\n" + tres + "\n" + cuatro + "\n" + cinco
end


myArray = [1,2,1,3,3,1,2,1,5,1]
print histograma (myArray)
