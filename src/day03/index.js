const { test, readInput } = require("../utils")

const prepareInput = rawInput => rawInput

const input = prepareInput(readInput())

const runPartOne = input => {
  const startPosition = { X: 0, Y: 0 }
  const currentPosition = getDeepCopyOf(startPosition)

  const seenPositions = [getDeepCopyOf(currentPosition)]
  for (let dirIndex = 0; dirIndex < input.length; dirIndex += 1) {
    moveToNewPosition(currentPosition, input.charAt(dirIndex))
    if (seenPositions.some(
      position => (position.X === currentPosition.X
        && position.Y === currentPosition.Y))) continue

    seenPositions.push(getDeepCopyOf(currentPosition))
  }

  return seenPositions.length
}

const runPartTwo = input => {
  const startPosition = { X: 0, Y: 0 }
  const seenPositions = [getDeepCopyOf(startPosition)]

  for (let santaIndex = 0; santaIndex < 2; santaIndex += 1) {
    const currentPosition = getDeepCopyOf(startPosition)

    for (let dirIndex = santaIndex; dirIndex < input.length; dirIndex += 2) {
      moveToNewPosition(currentPosition, input.charAt(dirIndex))
      if (seenPositions.some(
        position => (position.X === currentPosition.X
          && position.Y === currentPosition.Y))) continue

      seenPositions.push(getDeepCopyOf(currentPosition))
    }

  }

  return seenPositions.length
}

const getDeepCopyOf = object => JSON.parse(JSON.stringify(object))

const moveToNewPosition = (currentPosition, chr) => {
  switch (chr) {
    case "^":
      currentPosition.Y += 1
      break
    case "v":
      currentPosition.Y -= 1
      break
    case "<":
      currentPosition.X -= 1
      break
    case ">":
      currentPosition.X += 1
      break
  }
}

/* Tests */

// test(result, expected)
console.log("Part 1 tests")
test(runPartOne(">"), 2)
test(runPartOne("^>v<"), 4)
test(runPartOne("^v^v^v^v^v"), 2)

console.log("Part 2 tests")
test(runPartTwo("^v"), 3)
test(runPartTwo("^>v<"), 3)
test(runPartTwo("^v^v^v^v^v"), 11)
/* Results */

console.time("Time")
const resultA = runPartOne(input)
const resultB = runPartTwo(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
