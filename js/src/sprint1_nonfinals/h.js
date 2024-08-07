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

function sumOfBinaries(firstNumber, secondNumber) {
  let res = [];
  let transfer = 0;

  for (let i = 0; i < Math.max(firstNumber.length, secondNumber.length); i++) {
    let n;

    const digit1 = parseInt(firstNumber[firstNumber.length - 1 - i]) || 0;
    const digit2 = parseInt(secondNumber[secondNumber.length - 1 - i]) || 0;

    const fullDigitSum = digit1 + digit2 + transfer;

    [n, transfer] =
      fullDigitSum === 0 || fullDigitSum === 1
        ? [fullDigitSum, 0]
        : fullDigitSum === 2
        ? [0, 1]
        : [1, 1];

    res.unshift(n);
  }

  if (transfer > 0) {
    res.unshift(transfer);
  }

  return res.map((x) => `${x}`).join("");
}

function solve() {
  const firstNumber = readLine();
  const secondNumber = readLine();
  process.stdout.write(`${sumOfBinaries(firstNumber, secondNumber)}`);
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

export const h = {
  sumOfBinaries,
};
