function fizzBuzz(numbers) {
  // start with an empty array
  let result = [];

  for (number of numbers) {
    if (number % 15 === 0) result.push('fizzbuzz');
    else if (number % 3 === 0) result.push('fizz');
    else if (number % 5 === 0) result.push('buzz');
    else result.push(number);
  }

  // return the array as a string
  return result.join(', ');

}

module.exports = fizzBuzz;