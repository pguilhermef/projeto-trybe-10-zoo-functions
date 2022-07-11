const data = require('../data/zoo_data');

const { species, hours } = data;

const allAnimals = () => species
  .map((specie) => specie.name);

const allDays = Object.keys(hours);

// Esta função retorna os dias disponiveis que o animal passado como parâmetro estará no zoo em um array
const animalAvailability = (animal) => species
  .find(({ name }) => name === animal).availability;

// Esta função retorna o horário de funcionamento que o dia passado como parâmetro tem em uma string.
const hourOpen = (day) => {
  if (day === 'Monday') {
    return 'CLOSED';
  }

  return `Open from ${hours[day].open}am until ${hours[day].close}pm`;
};

// Esta função retorna os animais disponíveis no dia passado como parâmetro em um array
const animalsInZoo = (day) => {
  if (day === 'Monday') {
    return 'The zoo will be closed!';
  }

  return species
    .filter(({ availability }) => availability.includes(day))
    .map((specie) => `${specie.name}`);
};

// Esta função retorna um objeto contendo o horário de funcionamento e os animais disponiveis, dado um dia da semana como parâmetro.
const hourAndAnimalsAvaliables = (day) => {
  const objeto = {};

  if (!day || (!allDays.includes(day) && !allAnimals().includes(day))) {
    for (let index = 0; index < Object.keys(hours).length; index += 1) {
      objeto[`${Object.keys(hours)[index]}`] = {
        officeHour: hourOpen(`${Object.keys(hours)[index]}`),
        exhibition: animalsInZoo(`${Object.keys(hours)[index]}`),
      };
    }
    return objeto;
  }

  objeto[`${day}`] = {
    officeHour: hourOpen(day),
    exhibition: animalsInZoo(day),
  };

  return objeto;
};

function getSchedule(scheduleTarget) {
  if (allAnimals().includes(scheduleTarget)) {
    return animalAvailability(scheduleTarget);
  }

  return hourAndAnimalsAvaliables(scheduleTarget);
}

module.exports = getSchedule;
