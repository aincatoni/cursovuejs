


describe('Example Component', ()=> {
  test( 'Debe de ser mayor a 10', () =>{

    // Arreglar
    let value = 9;

    // Estimulo
    value = value + 2

    // Observar el resultado
    if (value > 10) {
      //Todo bien
    } else {
      throw `${value} no es mayor a 10`
    }

  })

})



