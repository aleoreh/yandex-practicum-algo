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

function getSum(listNumber, number) {
  const numberStr = number.toString();

  let res = [];
  let t = 0;

  for (
    let i = 0;
    i < Math.max(listNumber.length, number.toString().length);
    i++
  ) {
    let n;

    const c1 = listNumber[listNumber.length - 1 - i] || 0;
    const c2 = parseInt(numberStr[numberStr.length - 1 - i]) || 0;

    const tmp = c1 + c2 + t;

    [n, t] = tmp < 10 ? [tmp, 0] : [tmp - 10, 1];

    res.unshift(n);
  }

  if (t > 0) {
    res.unshift(t);
  }

  return res;
}

function solve() {
  const length = readInt();
  const listNumber = readArray();
  const number = readInt();

  process.stdout.write(`${getSum(listNumber, number).join(" ")}`);
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
  getSum,
};
