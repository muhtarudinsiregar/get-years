const assert = require('assert')
const getYears = require('./index')

describe('index test', () => {
  it("should return 2016, 2017, 2018", function () {
    const actual = getYears(1)
    const expected = [2016, 2017, 2018];

    assert.deepEqual(expected, actual)
  })
});
