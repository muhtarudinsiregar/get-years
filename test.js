const assert = require('assert')
const getYears = require('./index')

describe('index test', () => {
  it('should return 2016, 2017, 2018', () => {
    var actual = getYears('1');
    var expected = [2016, 2017, 2018];
    assert.equal(expected, actual);
  });
});
