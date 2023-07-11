/* import { owners } from "./data/heroes"; */
import superHeroes from "../data/heroes";

// getHeroeById (id)
//funciones de Flecha
// usar el método find de los arreglos
// console.log(getHeroeById(N))
export const getHeroeById = (id) =>
  superHeroes.find((heroe) => heroe.id === id);

//getHeroesByOwner ('DC', 'Marvel')
// [] necesito un nuevo arreglo dependiente del argumento
//console.log(getHeroesByOwner('DC'))
export const getHeroesByOwner = (owner) =>
  superHeroes.filter((heroe) => heroe.owner === owner);
