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

function getExcessiveLetter(firstLine, secondLine) {
  const firstSorted = firstLine.split("").sort((x, y) => (x > y ? -1 : 1));
  const secondSorted = secondLine.split("").sort((x, y) => (x > y ? -1 : 1));

  for (
    let i = 0;
    i < Math.max(firstSorted.length, secondSorted.length);
    i++
  ) {
    if (firstSorted[i] !== secondSorted[i]) return secondSorted[i];
  }

  return undefined;
}

function solve() {
  const firstLine = readLine();
  const secondLine = readLine();
  process.stdout.write(`${getExcessiveLetter(firstLine, secondLine)}`);
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

function readLine() {
  const line = _inputLines[_curLine];
  _curLine++;
  return line;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

module.exports = {
  getExcessiveLetter,
};
