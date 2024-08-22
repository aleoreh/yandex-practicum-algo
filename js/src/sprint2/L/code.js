const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin,
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', (line) => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// https://education.yandex.ru/handbook/algorithms/article/zadachi-o-chislah-fibonachchi
function fibLastN(x, n) {
    let prev2 = 0;
    let prev1 = 1;
    let cur = x;

    while (cur >= 0) {
        let prev2_ = prev1;
        prev1 = (prev2 + prev1) % Math.pow(10, n);
        prev2 = prev2_;

        cur--;
    }

    return prev2;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function solve() {
    const [n, k] = readArray(); // n, k

    const res = fibLastN(n, k);

    process.stdout.write(`${res % Math.pow(10, k)}\n`);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readString() {
    const res = _inputLines[_curLine];
    _curLine++;
    return res;
}

function readArray() {
    const arr = _inputLines[_curLine].trim().split(' ');
    _curLine++;
    return arr;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

module.exports = {
    fib: fibLastN,
};
