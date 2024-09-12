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
 * @param {number[]} lengths
 * @returns {number}
 */
function maxPerimeter(lengths) {
    const lengthsSorted = lengths.slice().sort((x, y) => x - y);

    let res = 0;

    let i = 0;

    while (i < lengthsSorted.length - 2) {
        if (lengthsSorted[i + 2] < lengthsSorted[i] + lengthsSorted[i + 1]) {
            res = Math.max(
                res,
                lengthsSorted[i] + lengthsSorted[i + 1] + lengthsSorted[i + 2],
            );
        }

        i++;
    }

    return res;
}

/**
 * @returns {number[]}
 */
function parse() {
    const n = readInt();
    const lengths = readArray();

    return asInt(lengths);
}

/**
 *  Получает на вход результат функции `parse`
 * и вычисляет результат
 * @param {number[]} lengths
 */
function solve(lengths) {
    return maxPerimeter(lengths);
}

/**
 * форматирует результата для вывода
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
function readArray() {
    const arr = _inputLines[_curLine].trim().split(' ');
    _curLine++;
    return arr;
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
