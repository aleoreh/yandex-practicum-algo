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
 * @param {number[]} numbers
 * @returns {number[]}
 */
function sortWardrobe(numbers) {
    return [];
}

/**
 *
 * @param {number[]} numbers
 * @returns {string}
 */
function solve(numbers) {
    const res = sortWardrobe(numbers);
    return res.join(' ');
}

/**
 * @returns {[number]}
 */
function parseInput() {
    const n = readInt();
    const input = readArray();

    return input.map((x) => parseInt(x, 10));
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function run() {
    const values = parseInput();
    const output = solve(values);
    process.stdout.write(`${output}`);
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

/**
 *
 * @returns {string[]}
 */
function readArray() {
    const arr = _inputLines[_curLine].trim().split(' ');
    _curLine++;
    return arr;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

module.exports = { solveUnlined };
