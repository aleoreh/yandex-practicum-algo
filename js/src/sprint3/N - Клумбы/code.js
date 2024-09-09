const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin,
});

let _inputLines = [];
let _curLine = 0;

_reader.on('line', (line) => {
    _inputLines.push(line);
});

process.stdin.on('end', run);

// ~~~~~~~~~~~~~~~ решение ~~~~~~~~~~~~~~~ //

/**
 *
 * @param {[number, number][]} int1
 * @param {[number, number][]} int2
 */
function isIntersected([x1, x2], [y1, y2]) {
    return x1 < y2 && y1 <= x2;
}

/**
 *
 * @param {[number, number][]} sections
 */
function unionSections(sections) {
    if (sections.length <= 1) {
        return sections;
    }

    const arr = sections.slice().sort(([x0, x1], [y0, y1]) => x0 - y0);

    let acc = [arr[0]];
    let i = 1;

    while (i < arr.length) {
        const prev = acc[acc.length - 1];
        const next = arr[i];

        if (!isIntersected(prev, next)) {
            acc.push(arr[i]);
        } else {
            acc[acc.length - 1] = [
                Math.min(prev[0], next[0]),
                Math.max(prev[1], next[1]),
            ];
        }

        i++;
    }

    return acc;
}

/**
 *
 * @param {[number, number][]} input
 * @returns string[]
 */
function solve(input) {
    const resValue = unionSections(input);
    return resValue.map(([x, y]) => `${x} ${y}`).join('\n');
}

function parseInput() {
    const n = readInt();
    const values = [];
    for (let i = 0; i < n; i++) {
        let line = readArray();
        values.push([parseInt(line[0]), parseInt(line[1])]);
    }
    return values;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function run() {
    const values = parseInput();
    const outputArr = solve(values);
    process.stdout.write(`${outputArr}`);
}

/**
 * Запускает решение, принимая на вход весь ввод
 * @param {string} inputText - полный текст ввода, не разделённый на строки
 */

function solveUnlined(inputText) {
    _curLine = 0;
    _inputLines = inputText.trim().split('\n');
    const values = parseInput();
    return solve(values);
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

module.exports = { solveUnlined };
