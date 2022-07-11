// COMPLETO!

const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const findAnimal = species.find((specie) => specie.name === animal);
  const findAge = findAnimal.residents.every((resident) => resident.age >= age);

  return findAge;
}

module.exports = getAnimalsOlderThan;
