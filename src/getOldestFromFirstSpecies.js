const data = require('../data/zoo_data');

const { species, employees } = data;

const getAnimal = (id) => employees
  .find((employee) => employee.id === id).responsibleFor[0];

const getOlder = (id) => species
  .find((specie) => specie.id === id).residents
  .reduce((acc, curr) => (curr.age > acc.age ? curr : acc));

function getOldestFromFirstSpecies(id) {
  return Object.values(getOlder(getAnimal(id)));
}

console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = getOldestFromFirstSpecies;
