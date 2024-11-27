const isTrue = (value) => {
  if (value == null || Number.isNaN(value)) {
    return false;
  }

  switch (typeof value) {
    case "boolean":
      return value === true;
    case "number":
      return value !== 0;
    case "string":
      return value.trim().length > 0;
    case "symbol":
      return true;
    case "function":
      return true;
  }

  if (typeof value === "object") {
    if (Array.isArray(value)) {
      return value.length > 0;
    }

    if (value instanceof Date || value instanceof RegExp) {
      return true;
    }

    return Object.keys(value).length > 0;
  }

  return false;
};

module.exports = {
  isTrue,
};
