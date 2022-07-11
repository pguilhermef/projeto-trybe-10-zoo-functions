// COMPLETO!

const data = require('../data/zoo_data');

const { species } = data;

const animalIds = species.map((specie) => specie);

function getSpeciesByIds(...ids) {
  const animalFinded = [];

  ids.forEach((indice) => {
    if (indice === undefined) {
      return [];
    }

    animalIds.forEach((animalId) => {
      if (animalId.id === indice) {
        animalFinded.push(animalId);
      }
    });
  });

  return animalFinded;
}

module.exports = getSpeciesByIds;
