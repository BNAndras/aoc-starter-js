const { test, readInput } = require("../utils")
const crypto = require("crypto")
const prepareInput = rawInput => rawInput;

const input = prepareInput(readInput());

const runPartOne = input =>
  findLowestNumberForGivenHash(input, 5);

const runPartTwo = input =>
  findLowestNumberForGivenHash(input, 6);


const findLowestNumberForGivenHash = (input, numberOfLeadingDigits) => {
  let lowestPositiveNumber = 0
  let md5hash = generateHash(input + lowestPositiveNumber)

  while (
    doesHashHaveEnoughLeadingDigits(md5hash, numberOfLeadingDigits) === false
    ) {
    lowestPositiveNumber += 1
    md5hash = generateHash(input + lowestPositiveNumber)
  }

  return lowestPositiveNumber;
}

const generateHash = data =>
  crypto
    .createHash("md5")
    .update(data, "utf-8");

const doesHashHaveEnoughLeadingDigits = (hash, numberOfDigits) =>
  hash
    .digest("hex")
    .substring(0, numberOfDigits) === "0".repeat(numberOfDigits);

/* Tests */

// test(result, expected)
console.log("Part One tests")
test(runPartOne("abcdef"), 609043)
test(runPartOne("pqrstuv"), 1048970)

//console.log("Part Two tests") // No tests given

/* Results */

console.time("Time")
const resultPartOne = runPartOne(input)
const resultPartTwo = runPartTwo(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultPartOne)
console.log("Solution to part 2:", resultPartTwo)
