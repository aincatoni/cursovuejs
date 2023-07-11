
const miPromesa = () => {
  return new Promise ( resolve => {
    setTimeout(() => {
      resolve('Tenemos un valor en la promesa')
    }, 1000)
  })
  
}

const medirTiempoAsyn = async () => {
  console.log("Inicio");
  const respuesta = await miPromesa()
  console.log(respuesta);
  console.log("Fin");
  return 'fin de medir tiempo async'
  // throw 'Error en medirTiempoAsync'
}

medirTiempoAsyn()
// .then( valor => console.log(valor ))
// .catch(err => console.log(err))
