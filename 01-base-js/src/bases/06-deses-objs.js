const person = {
  name: "Tony",
  age: 45,
  codeName: "Ironman",
  power: "Dinero",
};

const { age, name, codeName, power = "No tiene poder" } = person;

// console.log(name);
// console.log(age);
// console.log(codeName);
// console.log(power);

const createHero = ({ name: nombre, age, codeName, power }) => ({
  id: 12131235214,
  nombre,
  age,
  codeName,
  power,
});
console.log(createHero(person));
