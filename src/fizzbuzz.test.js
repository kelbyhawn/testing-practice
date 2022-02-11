const fizzBuzz = require('./fizzbuzz');

describe("FizzBuzz", () => {

  // find the value of the index 3
  test('[3] should result in "fizz"', () => {
    expect(fizzBuzz([3])).toBe('fizz');
  });

  // find the value of the index 5
  test('[5] should result in "buzz"', () => {
    expect(fizzBuzz([5])).toBe('buzz');
  });

  // find the value of the index 15
  test('[15] should result in "fizzbuzz"', () => {
    expect(fizzBuzz([15])).toBe('fizzbuzz');
  });

  // find the value of the index 3
  test('[1, 2, 3] should result in "1, 2, fizz"', () => {
    expect(fizzBuzz([3])).toBe('fizz');
  })
  
});