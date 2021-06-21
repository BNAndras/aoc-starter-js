const { test, readInput } = require("../utils")

const prepareInput = rawInput => rawInput

const input = prepareInput(readInput())

const goA = input => {
  const startPosition = { X: 0, Y: 0 }
  const currentPosition = GetDeepCopyOf(startPosition)

  const seenPositions = [GetDeepCopyOf(currentPosition)]
  for (let dirIndex = 0; dirIndex < input.length; dirIndex += 1) {
    MoveToNewPosition(currentPosition, input.charAt(dirIndex))
    if (seenPositions.some(
      position => (position.X === currentPosition.X
        && position.Y === currentPosition.Y))) continue

    seenPositions.push(GetDeepCopyOf(currentPosition))
  }

  return seenPositions.length
}

const goB = input => {
  const startPosition = { X: 0, Y: 0 }
  const seenPositions = [GetDeepCopyOf(startPosition)]

  for (let santaIndex = 0; santaIndex < 2; santaIndex += 1) {
    const currentPosition = GetDeepCopyOf(startPosition)

    for (let dirIndex = santaIndex; dirIndex < input.length; dirIndex += 2) {
      MoveToNewPosition(currentPosition, input.charAt(dirIndex))
      if (seenPositions.some(
        position => (position.X === currentPosition.X
          && position.Y === currentPosition.Y))) continue

      seenPositions.push(GetDeepCopyOf(currentPosition))
    }

  }

  return seenPositions.length
}

const GetDeepCopyOf = object => JSON.parse(JSON.stringify(object))

const MoveToNewPosition = (currentPosition, chr) => {
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

const IsPositionAlreadySeen = (currentPosition, seenPositions) => {
  seenPositions.some(
    position => (position.X === currentPosition.X
      && position.Y === currentPosition.Y))
}

/* Tests */

// test(result, expected)
console.log("Part 1 tests")
test(goA(">"), 2)
test(goA("^>v<"), 4)
test(goA("^v^v^v^v^v"), 2)

console.log("Part 2 tests")
test(goB("^v"), 3)
test(goB("^>v<"), 3)
test(goB("^v^v^v^v^v"), 11)
/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
