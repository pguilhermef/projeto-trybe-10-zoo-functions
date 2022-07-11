// COMPLETO!

const data = require('../data/zoo_data');

const { species } = data;

// console.log(species[0].residents.length);

function countAnimals(animal) {
  // get all animals
  // https://www.youtube.com/watch?v=O_bSjsLga48&ab_channel=MarioSouto-DevSoutinho
  const allAnimals = species
    .reduce((acc, specie) => ({ ...acc, [specie.name]: specie.residents.length }), {});
  if (animal === undefined) {
    return allAnimals;
  }

  // get specific animal
  // Ajuda da mentoria (Caraca trybe, botaram pra lascar hein (T-T) )
  const specificAnimal = species.find(({ name }) => name === animal.specie).residents
    .filter((resident) => (!animal.sex ? true : resident.sex === animal.sex)).length;
  return specificAnimal;
}

// console.log(countAnimals({ specie: 'penguins', sex: 'female' }));

module.exports = countAnimals;
