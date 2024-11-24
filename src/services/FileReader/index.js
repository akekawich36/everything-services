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

module.exports = {
  getBase64,
};