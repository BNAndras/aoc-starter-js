const { test, readInput } = require("../utils")

const prepareInput = rawInput => rawInput

const input = prepareInput(readInput())

const runPartOne = input => {
  const regex = /-?[\d]+/g;
  input = input + 0; // force at least one match
  const sum = input
    .match(regex)
    .map(m => Number(m))
    .reduce((a, b) => a + b, 0);

  return sum;
}

const runPartTwo = input => {

  let sum = 0;
  const jsonObject = JSON.parse(input);
  const containsRed = Object
    .keys(jsonObject)
    .some(k => jsonObject[k] === 'red');
  const isArray = Array.isArray(jsonObject);
  if (isArray === false && containsRed)
    return sum;
  for (const k of Object.keys(jsonObject)) {
    const v = jsonObject[k];
    const vContainsRed = Object.keys(v).some(k => v[k] === 'red');
    if (typeof v === 'number')
      sum += v;
    else if (vContainsRed === false)
      sum += runPartOne(JSON.stringify(v));
    }

  return sum;
}

test(runPartOne(`{"a":2,"b":4}`), 6); // pass
test(runPartOne("[[[3]]]"), 3); // pass
test(runPartOne(`{"a":{"b":4},"c":-1}`), 3); //fail
test(runPartOne(`{"a":[-1,1]}`), 0); // fail
test(runPartOne(`[-1,{"a":1}]`), 0); //fail
test(runPartOne("[]"), 0); // pass
test(runPartOne("{}"), 0); // pass

console.log("Part two tests");
test(runPartTwo(`[1,2,3]`), 6); // pass
test(runPartTwo(`[1,{"c":"red","b":2},3]`), 4); // pass
test(runPartTwo(`{"d":"red","e":[1,2,3,4],"f":5}`), 0); // pass
test(runPartTwo(`[1,"red",5]`), 6); // 0
/* Results */


console.time("Time")
const resultPartOne = runPartOne(input)
const resultPartTwo = runPartTwo(input)
console.timeEnd("Time")

console.log("Solution to part 1:", resultPartOne)
console.log("Solution to part 2:", resultPartTwo)
