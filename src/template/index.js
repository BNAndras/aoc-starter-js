const { test, readInput } = require("../utils")

const prepareInput = rawInput => rawInput

const input = prepareInput(readInput())

const runPartOne = input => {
  return
}

const runPartTwo = input => {
  return
}

const splitInput = input => input.split(/\r?\n/)
/* Tests */

// test(result, expected)

/* Results */

console.time("Time")
const resultPartOne = runPartOne(input)
const resultPartTwo = runPartTwo(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultPartOne)
console.log("Solution to part 2:", resultPartTwo)
