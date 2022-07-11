// COMPLETO!

const data = require('../data/zoo_data');

const { employees } = data;
// console.log();

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }

  return employees.find((i) => i.firstName === employeeName || i.lastName === employeeName);
}

module.exports = getEmployeeByName;
