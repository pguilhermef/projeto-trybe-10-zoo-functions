// COMPLETO!

const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const entrantsLevels = {
    child: 0,
    adult: 0,
    senior: 0,
  };

  entrants.map(({ age }) => {
    if (age < 18) entrantsLevels.child += 1;
    else if (age >= 18 && age < 50) entrantsLevels.adult += 1;
    else entrantsLevels.senior += 1;
    return null;
  });

  return entrantsLevels;
}

const { prices } = data;
const { adult, senior, child } = prices;

function calculateEntry(entrants) {
  if (entrants === undefined || Object.values(entrants).length === 0) {
    return 0;
  }

  let valorTotal = 0;
  const pessoas = countEntrants(entrants);
  valorTotal += child * pessoas.child + adult * pessoas.adult + senior * pessoas.senior;

  return valorTotal;
}

// console.log(calculateEntry(visitantes));

module.exports = { calculateEntry, countEntrants };
