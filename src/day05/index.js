const { test, readInput } = require("../utils")

const prepareInput = rawInput => rawInput

const input = prepareInput(readInput())

const goA = input => {

  let niceStrings = 0
  SplitInput(input).forEach(
    str => {
      if (SatisfiesPartOneConditions(str)) niceStrings += 1
    })

  return niceStrings
}

const goB = input => {
  let niceStrings = 0
  SplitInput(input).forEach(
    str => {
      if (SatisfiesPartTwoConditions(str)) niceStrings += 1
    })

  return niceStrings
}

const SatisfiesPartOneConditions = str =>
  hasAtLeastThreeVowels(str)
  && hasAtLeastOneDoubleLetter(str)
  && hasNoBadSubstrings(str)

const SatisfiesPartTwoConditions = str =>
  hasAtLeastOneDoubleLetterWithoutOverlap(str)
  && hasAtLeastOneDoubleLetterOccurringTwiceWithGap(str)


const hasAtLeastThreeVowels = str =>
  (str.match(/([aeiou])/g) || []).length >= 3

const hasAtLeastOneDoubleLetter = str =>
  (str.match(/(.)\1/g) || []).length > 0

const hasNoBadSubstrings = str =>
  (str.match(/(ab|cd|pq|xy)/g) || []).length === 0

const hasAtLeastOneDoubleLetterWithoutOverlap = str =>
  (str.match(/(.{2}).*\1/g) || []).length > 0

const hasAtLeastOneDoubleLetterOccurringTwiceWithGap = str =>
  (str.match(/(.).\1/g) || []).length > 0


const SplitInput = input => input.split(/\r?\n/)
/* Tests */

// test(result, expected)
console.log("Part 1 tests")
test(goA("ugknbfddgicrmopn"), 1)
test(goA("aaa"), 1)
test(goA("jchzalrnumimnmhp"), 0)
test(goA("haegwjzuvuyypxyu"), 0)
test(goA("dvszwmarrgswjxmb"), 0)

console.log("Part 2 tests")
test(goB("qjhvhtzxzqqjkmpb"), 1)
test(goB("xxyxx"), 1)
test(goB("uurcxstgmygtbstg"), 0)
test(goB("ieodomkazucvgmuy"), 0)

/* Results */

console.time("Time")
const resultA = goA(input)
const resultB = goB(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultA)
console.log("Solution to part 2:", resultB)
