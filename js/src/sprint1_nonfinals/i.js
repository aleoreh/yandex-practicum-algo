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

function isPowerOfFour(number) {
  let i = 0;
  while (true) {
    const i4 = Math.pow(4, i);
    if (i4 > number) return false;
    if (i4 === number) return true;
    i++;
  }
}

function solve() {
  const number = readInt();
  if (isPowerOfFour(number)) {
    console.log("True");
  } else {
    console.log("False");
  }
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

export const i = {
  isPowerOfFour,
};
