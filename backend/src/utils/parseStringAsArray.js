module.exports = function parseStringAsArray(arrayAsAtring) {
  return arrayAsAtring.split(",").map(tech => tech.trim());
};
