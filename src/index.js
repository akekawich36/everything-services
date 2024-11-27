const dayjs = require("./DateTimeFormat");
const { getBase64 } = require("./FileService");
const FormServices = require("./Form");
class Services {
  constructor(config) {
    this.config = config;
  }

  dayjs = dayjs;
  isTrue = FormServices.isTrue;

  getBase64 = getBase64;
}

const services = new Services();
module.exports = services;