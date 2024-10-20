// Math Object Extensions

Math.randomDec = function (low, high) {
  // returns a random decimal between low (inclusive) and high (exclusive)
  return Math.random() * (high - low) + low;
};

Math.randomInt = function (low, high) {
  // function Math.randomInt(low, high)
  // reutrns a random integer between low (inclusive) and high (exclusive)
  return Math.floor(Math.randomDec(low, high));
};

Math.roundTo = function (num, numPlaces) {
  // Round num off to the nearest NumPlaces
  num = num * 10 ** numPlaces;
  num = Math.round(num);
  return num / 10 ** numPlaces;
};
