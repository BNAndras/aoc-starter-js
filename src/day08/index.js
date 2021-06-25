const { test, readInput } = require("../utils")

const prepareInput = rawInput => rawInput

const input = prepareInput(readInput())

const runPartOne = input => {
  const stringLiterals = splitInput(input);
  const numberOfCodeCharacters = stringLiterals.join("").length;
  const numberOfCharactersInMemory = getNumberOfCharactersInMemoryPartOne(stringLiterals);

  return numberOfCodeCharacters - numberOfCharactersInMemory;
}

const runPartTwo = input => {
  const stringLiterals = splitInput(input);
  const numberOfCodeCharacters = stringLiterals.join("").length;
  const numberOfCharactersInMemory = getNumberOfCharactersInMemoryPartTwo(stringLiterals);

  return  numberOfCharactersInMemory - numberOfCodeCharacters;
}

const getNumberOfCharactersInMemoryPartOne = stringLiterals =>
{
  let numberOfCharactersInMemory = 0;

  stringLiterals.forEach(stringLiteral =>
  {
    numberOfCharactersInMemory += stringLiteral
      ? eval(stringLiteral).length
      // "" would be empty, "abc" would just be abc, "aaa\"aaa" becomes aaa\aaa
      : 0;
  });

  return numberOfCharactersInMemory;
}

const getNumberOfCharactersInMemoryPartTwo = stringLiterals =>
{
  let numberOfCharactersInMemory = 0;

  stringLiterals.forEach(stringLiteral =>
  {
    numberOfCharactersInMemory += stringLiteral
      ? JSON.stringify(stringLiteral).length
      // "" becoming "\"\"" is just escaping the original double quotes
      // https://stackoverflow.com/posts/16507961/revisions stringify will escape that automatically
      : 0;
  });

  return numberOfCharactersInMemory;
}

const splitInput = input => input.split(/\r?\n/)
/* Tests */

// test(result, expected)
console.log(`Part One tests`);
test(runPartOne(`""`), 2);
test(runPartOne(`"abc"`), 2);
test(runPartOne(`"aaa\\"aaa"`), 3);
test(runPartOne(`"\\x27\"`), 5);

console.log("Part Two tests");
test(runPartTwo(`""`), 4);
test(runPartTwo(`"abc"`), 4);
test(runPartTwo(`"aaa\\"aaa"`), 6);
test(runPartTwo(`"\\x27\"`), 5);

/* Results */

console.time("Time")
const resultPartOne = runPartOne(input)
const resultPartTwo = runPartTwo(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultPartOne)
console.log("Solution to part 2:", resultPartTwo)
