const characters = ["Goku", "Vegeta", "Trunks", "Goten"];

const [g, v, t, goten = "No tiene valor"] = characters;
console.log(goten);

const returnArray = ([letters, numbers]) => {
  return [letters, numbers];
};
const [letters, numbers] = returnArray(["XYZ", 987]);
console.log(letters, numbers);

// const goku = characters[0];
// const trunks = characters[2];
// const vegeta = characters[1];
