const { test, readInput } = require("../utils")

const prepareInput = rawInput => rawInput

const input = prepareInput(readInput())

const runPartOne = (input, numberOfSteps) => {
  const regex = /(.)\1*/g; 
  // 1211 is three runs at 1, 2, and 11

  let output = input;
  for (let index = 0; index < numberOfSteps; index += 1) {
/*     // memory issue since by index 12, the string is 20548947 characters
    const capture = output.length.toString() + output.substring(0, 1).toString()
    // 1211 becomes 41 here
    output = output.replace(regex, capture)
    cached_length = output.length
    // Replace random-length runs with 41
 */
    output = output
    .match(regex)
    .map(
      m => m.length.toString() + m[0]
      )
    .join('')
  } 

  return output.length // 1211 has become 414141 so this returns 6
}

const runPartTwo = input => runPartOne(input, 50);

const splitInput = input => input.split(/\r?\n/)
/* Tests */

// test(result, expected)
console.log("Part one tests");
test(runPartOne("1", 1), 2);
test(runPartOne("11", 1), 2);
test(runPartOne("21", 1), 4);
test(runPartOne("1211", 1), 6);
test(runPartOne("111221", 1), 6);

//console.log("Part two tests");
/* Results */

console.time("Time")
const resultPartOne = runPartOne(input, 40)
const resultPartTwo = runPartTwo(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultPartOne)
console.log("Solution to part 2:", resultPartTwo)
