import { getHeroeById } from "./bases/08-imp-exp"

/* console.log('Inicio')
new Promise( (resolve, reject)=> {
  console.log('cuerpo de la promesa')
  resolve('Promesa resuelta')
  // reject('Promera resuelta con error')
} ).then( console.log).catch( console.log)
console.log('Fin')
 */

const getHeroeByIdAsync = (id)=> {
  return new Promise((resolve,reject)=>{
    setTimeout( ()=> {
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe)
      } else {
        reject('Heroe no existe')
      } 

    }, 1000)
  });
}

getHeroeByIdAsync(3)
  .then( h => {
    console.log(`El héroe es: ${h.name}`);
  })
  .catch(console.log)