

# Luis Carlos Rojas Campos

#method in charge of finding the highest number in a list, receives a list of numbers.  
def mas_alto(numeros)
  anterior = 0
  #Ciclo que recorre la lista para comparar los valores de ella y así determinar el número más alto.
  numeros.each do |elemento|

    if elemento > anterior
      anterior = elemento 
    end
    
  end
  return anterior
end

myArray = [13, 2, 4, 35, 1]

mas_alto (myArray)
