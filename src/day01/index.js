const { test, readInput } = require("../utils")

const prepareInput = rawInput => rawInput

const input = prepareInput(readInput())

const goA = input => input.split("(").length - 1 - (input.split(")").length - 1)

const goB = input => {
  let currentFloor = 0
  let basementFloor = -1
  let characterPosition
  for (let i = 0; i < input.length - 1; i++) {
    if (currentFloor === basementFloor) {
      characterPosition = i
      break
    } else if (input[i] === "(")
      currentFloor = currentFloor + 1
    else if (input[i] === ")")
      currentFloor = currentFloor - 1
  }

  return characterPosition
}

/* Tests */

// test(result, expected)
console.log("Part 1 Tests")
test(goA("(())"), 0)
test(goA("()()"), 0)
test(goA("((("), 3)
test(goA("(()(()("), 3)
test(goA("))((((("), 3)
test(goA("())"), -1)
test(goA("))("), -1)
test(goA(")))"), -3)
test(goA(")())())"), -3)

console.log("Part 2 Tests")
test(goB(")"), 1)
test(goB("()())"), 5)
/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
