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

const LETTERS = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
};

function flat(xs) {
    return xs.reduce((acc, x) => [...acc, ...x], []);
}

function lettersComb(inputLetters) {
    function rec(input_, acc, res) {
        if (input_.length === 0) {
            return [...res, acc];
        }
        const [head, ...rest] = input_;
        return flat(head.map((x) => rec(rest, [...acc, x], res)));
    }
    return rec(inputLetters, [], []).map((x) => x.join(''));
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function solve() {
    const buttonsStr = readString();

    const buttons = buttonsStr.split('').map((x) => parseInt(x));

    const res = lettersComb(buttons.map((btn) => LETTERS[btn].split('')));

    process.stdout.write(`${res.join(' ')}`);
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
    lettersComb,
    LETTERS,
};
