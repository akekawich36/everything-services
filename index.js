const { formatDate, compareDates, dayjs } = require("./dateTimeFormat");

const formatDate = formatDate;
const compareDates = compareDates;
const dayjs = dayjs;

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function () {
      const result = reader.result;
      return resolve(result);
    };
    reader.onerror = function (error) {
      return reject(error);
    };
    reader.readAsDataURL(file);
  });
};

const service = {
  formatDate,
  compareDates,
  dayjs,
  getBase64,
};

module.exports = service;
