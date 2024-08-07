const _readline = require("readline");

const _reader = _readline.createInterface({
  input: process.stdin,
});

const _inputLines = [];
let _curLine = 0;

_reader.on("line", (line) => {
  _inputLines.push(line);
});

process.stdin.on("end", solve);

function factorize(number) {
  let cur = number;
  let divider = 2;
  let acc = [];
  while (cur > 1) {
    if (cur % divider !== 0) {
      divider++;
    } else {
      cur = cur / divider;
      acc.push(divider);
    }
  }
  return acc;
}

function solve() {
  const number = readInt();
  const factorization = factorize(number);
  process.stdout.write(`${factorization.join(" ")}`);
}

function readInt() {
  const n = Number(_inputLines[_curLine]);
  _curLine++;
  return n;
}

function readArray() {
  var arr = _inputLines[_curLine]
    .trim(" ")
    .split(" ")
    .map((num) => Number(num));
  _curLine++;
  return arr;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

module.exports = {
  factorize,
};
