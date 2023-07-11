const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 23324242,
    lat: 23.999,
    lng: 2343232,
  },
};

const persona2 = { ...persona };
persona2.nombre = "Peter";
console.log(persona);
console.log(persona2);
