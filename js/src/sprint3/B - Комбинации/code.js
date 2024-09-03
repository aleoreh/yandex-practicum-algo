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

function divmod(value, divider) {
    return [Math.floor(value / divider), value % divider];
}

function add(xs, n) {
    function capacity(x) {
        return x[1];
    }
    function value(x) {
        return x[0];
    }
    let i = xs.length - 1;
    const acc = [];
    let [q, r] = [n, 0];

    while (i >= 0) {
        [q, r] = divmod(q, capacity(xs[i]));
        acc.unshift(r + value(xs[i]));
        if (q === 0) break;
        i--;
    }

    return acc;
}

add([[0, 2], [2, 3]], 3)

function combine(buttons, letters) {
    const res = [];
    function recur(i, cur) {
        if (i === 0) {
            res.push(cur);
        } else {
        }
    }
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
    combine,
    add,
};
