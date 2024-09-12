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
 * @param {T[]} values
 */
function permutations(values) {
    const res = [];
    for (let i = 0; i < values.length; i++) {
        for (let j = i + 1; j < values.length; j++) {
            res.push([values[i], values[j]]);
        }
    }
    return res;
}

/**
 *
 * @param {number[]} values
 */
function diffs(values) {
    return permutations(values).map(([x1, x2]) => Math.abs(x1 - x2));
}

/**
 * @returns {[number[], number]}
 */
function parse() {
    readInt();
    const squares = readArray((x) => parseInt(x, 10));
    const k = readInt();

    return [squares, k];
}

/**
 *  Получает на вход результат функции `parse`
 * и вычисляет результат
 * @param {[number[], number]}
 * @returns {number}
 */
function solve([squares, k]) {
    return diffs(squares).sort((x, y) => x - y)[k - 1];
}

/**
 * форматирует результата для вывода
 * @param {number}
 */
function format(value) {
    return value.toString();
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function run() {
    const output = format(solve(parse()));

    process.stdout.write(`${output}`);
}

/**
 * Запускает решение, принимая на вход весь ввод
 * @param {string} inputText - полный текст ввода, не разделённый на строки
 */

function solveUnlined(inputText) {
    _curLine = 0;
    _inputLines = inputText.split('\n').map((x) => x.trim());

    return format(solve(parse()));
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
function readArray(fn) {
    const arr = _inputLines[_curLine].trim().split(' ');
    _curLine++;
    return fn ? arr : arr.map(fn);
}

function asInt(value) {
    return Array.isArray(value)
        ? value.map((x) => parseInt(x, 10))
        : typeof value === 'number'
          ? value
          : parseInt(value, 10);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

module.exports = { solveUnlined };
