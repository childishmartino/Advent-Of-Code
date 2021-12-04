const fs = require('fs');
const directionArray = fs.readFileSync('data.txt', { encoding: "utf-8" })
    .split(/\r?\n/)
    .filter((data) => Boolean(data))
    .map((data) => {
        const [direction, n] = data.split(" ")
        return {
            direction,
            n: parseInt(n)
        };
    })
// part 1
let forward = 0;
let depth = 0;

for (const directions of directionArray) {
    switch (directions.direction) {
        case "forward":
            forward += directions.n
            break;
        case "up":
            depth -= directions.n
            break;
        case "down":
            depth += directions.n
            break;
    }
}

console.log(forward * depth)

//part 2
let aim = 0;
let forward2 = 0;
let depth2 = 0;

for (const directions of directionArray) {
    switch (directions.direction) {
        case "forward":
            forward2 += directions.n
            depth2 += (aim * directions.n)
            break;
        case "up":
            aim -= directions.n
            break;
        case "down":
            aim += directions.n
            break;
    }
}

console.log(forward2 * depth2)
