const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { employees } = data;

// Eu gostaria de deixar um agradecimento especial aos meus amigos indianos do youtube que contribuiram muito para esse projeto como um todo. Obrigado por parecerem até os criadores das HOF'S.  -Pg

// Brincadeiras a parte gostaria de agradecer muitissimo também ao Roberto Baez pelas ótimas ajudas que deu me ensinando um pouco mais sobre as hofs. Sem ele eu não teria entendido e feito códigos que eu tenho achado até muito bons pra quem está iniciando.

// Recebe um id, nome ou sobrenome de funcionario e retorna o objeto do mesmo.
// let employeeFinded;
// const getEmployee = (object) => {
//   if (object.name) {
//     employeeFinded = employees
//       .find((employee) => employee.firstName === object.name || employee.lastName === object.name);
//   }
//   if (object.id) {
//     employeeFinded = employees
//       .find((employee) => employee.id === object.id);
//   }
// };

// Recebe um objeto de funcionarios e retorna um array com nomes dos animais que essa pessoa cuida.
const getSpecies = (employeeObject) => {
  const animals = employeeObject.responsibleFor;
  const nomes = [];

  animals.forEach((animal) => {
    nomes.push(species.find(({ id }) => id === animal).name);
  });

  return nomes;
};

// Recebe um array de animais e retorna um array com localização dos animais que essa pessoa cuida.
const getSpeciesLocation = (animalsName) => {
  const locais = [];

  animalsName.forEach((animal) => {
    locais.push(species.find(({ name }) => name === animal).location);
  });

  return locais;
};

// Formata o estilo de retorno pedido nos testes
// OBSERVAÇÃO: USAR O MAP PARA FORMATAR TODOS OS FUNCIONARIOS!!!
const coverageFactory = (employee) => ({
  id: employee.id,
  fullName: `${employee.firstName} ${employee.lastName}`,
  species: getSpecies(employee),
  locations: getSpeciesLocation(getSpecies(employee)),
});

function getEmployeesCoverage(info) {
  if (!info) return employees.map(coverageFactory);
  let employeeFinded;
  if (info.name) {
    employeeFinded = employees
      .find((employe) => employe.firstName === info.name || employe.lastName === info.name);
  }
  if (info.id) {
    employeeFinded = employees
      .find((employe) => employe.id === info.id);
  }
  if (!employeeFinded) throw new Error('Informações inválidas');
  return coverageFactory(employeeFinded);
}

module.exports = getEmployeesCoverage;
