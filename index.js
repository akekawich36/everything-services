const services = require("./src");

console.log(services.dayFormatter('2024-01-16').locale('th').format('DD MMMM BBBB') )

module.exports = services;
