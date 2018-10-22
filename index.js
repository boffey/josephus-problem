function lowestPowerOf2(number) {
  return Math.pow(2, Math.floor(Math.log(number) / Math.log(2)));
}

const number = process.argv[2];

console.log("Approach 1");
console.log((number - lowestPowerOf2(number)) * 2 + 1);

console.log("Approach 2");
const binary = parseInt(number, 10).toString(2);
const binaryArray = binary.split("");
const firstItem = binaryArray.shift();
binaryArray.push(firstItem);
const combined = binaryArray.join("");
console.log(parseInt(combined, 2));
