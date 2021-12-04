const fs = require('fs');
const depthArray = fs.readFileSync('data.txt', { encoding: "utf-8" })
    .split(/\r?\n/)
    .filter((data) => Boolean(data))
    .map((data) => parseInt(data));

console.log(depthArray)

console.log(depthArray.length);

let depthIncreases = 0;

for (let i = 1; i < depthArray.length; i++) {
    if (depthArray[i] > depthArray[i - 1]) {
        depthIncreases++
    }
}

console.log(depthIncreases)

let slidingIncreases = 0;
for (let i = 2; i < depthArray.length - 1; i++) {
    if (depthArray[i - 2] + depthArray[i - 1] + depthArray[i] < depthArray[i - 1] + depthArray[i] + depthArray[i + 1]) {
        slidingIncreases++
    }
}

console.log(slidingIncreases)
