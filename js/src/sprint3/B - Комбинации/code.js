// Описание алгоритма находится здесь: https://github.com/aleoreh/yandex-practicum-algo/tree/dev/js/src/sprint2_final/B

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

function generate(buttons) {
    const res = [];
    const permutationsCount = buttons.reduce(
        (acc, nominals) => acc * nominals.length,
        1,
    );

    function recur(i, cur) {
        if (i === 0) {
            res.push(cur);
        } else {
            buttons.forEach((btn) => {
                recur(i - 1, cur + btn[i]);
            });
        }
    }

    recur(permutationsCount, '');

    return res;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function solve() {
    const buttonsStr = readString();

    const buttons = buttonsStr.split('').map((x) => parseInt(x));

    const res = generate(buttons.map((btn) => LETTERS[btn]));

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
    generate,
    LETTERS,
};
