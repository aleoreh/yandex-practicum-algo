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

function generateBraces(n) {
    const res = [];

    function isCorrect(seq) {
        let idx = 0;
        for (const elem of seq.split('')) {
            idx = elem === '(' ? idx + 1 : idx - 1;
            if (idx < 0) return false;
        }
        return idx === 0;
    }

    function recur(i, cur) {
        if (i === 0) {
            res.push(cur);
        } else {
            recur(i - 1, cur + '(');
            recur(i - 1, cur + ')');
        }
    }

    recur(2 * n, '');

    return res.filter(isCorrect);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function solve() {
    const n = readInt(); // длина скобочной последовательности

    const res = generateBraces(n);

    process.stdout.write(`${res.join('\n')}`);
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
    generateBraces,
};
