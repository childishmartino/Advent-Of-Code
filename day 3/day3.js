const fs = require('fs');
const diagnostic = fs.readFileSync('data.txt', { encoding: "utf-8" })
    .split(/\r?\n/)
    .filter((data) => Boolean(data));

console.log(diagnostic)