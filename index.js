'use strict'

module.exports = function getYear(range, sortBy){
  var currentYear = new Date().getFullYear()
  var getYear = [currentYear]

  for (var i = 1; i <= range; i++) {
    getYear.push(currentYear - i);
    getYear.push(currentYear + i);
  }

  if (sortBy === 'desc') {
    return getYear.reverse();
  }

  return getYear.sort();
};
