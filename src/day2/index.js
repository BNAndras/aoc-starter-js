const { test, readInput } = require("../utils")

const prepareInput = (rawInput) => rawInput

const input = prepareInput(readInput())

const goA = (input) => {
  let totalSqFt = 0
  const boxes = SplitInput(input)
  for (const box of boxes) {
    const dimensions = box.split("x").map(Number)
    dimensions.sort((a, b) => a - b);
    const [length, width, height] = dimensions;
    totalSqFt +=
    (2 * length * width + 2 * width * height + 2 * height * length)
    + length * width;
  }

  return totalSqFt
}

const goB = (input) => {
  let totalSqFt = 0
  const boxes = SplitInput(input)
  for (const box of boxes) {
    const dimensions = box.split("x").map(Number);
    dimensions.sort((a, b) => a - b);

    const [length, width, height] = dimensions;

    const ribbonLength = 2 * length + 2 * width;
    const bowLength = length * width * height;
    totalSqFt += bowLength + ribbonLength;
  }

  return totalSqFt
}

const SplitInput = input => input.split(/\r?\n/)
/* Tests */

// test(result, expected)
console.log("Part 1 tests")
test(goA("2x3x4"), 58)
test(goA("1x1x10"), 43)

console.log("Part 2 tests")
test(goB("2x3x4"), 34)
test(goB("1x1x10"), 14)
/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
