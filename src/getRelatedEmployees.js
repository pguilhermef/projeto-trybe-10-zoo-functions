// COMPLETO!

const data = require('../data/zoo_data');

const { employees } = data;
// console.log(employees); // me desative!

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83');

function getRelatedEmployees(managerId) {
  if (isManager(managerId) !== true) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const relatedEmployees = employees.filter((employee) => employee.managers.includes(managerId));
  return relatedEmployees.map((employee) => `${employee.firstName} ${employee.lastName}`);
}

getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8');

module.exports = { isManager, getRelatedEmployees };
