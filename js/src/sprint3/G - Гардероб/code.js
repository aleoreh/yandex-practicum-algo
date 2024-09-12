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
    if (numbers.length === 0) return numbers;

    const res = new Array(3);
    for (let i = 0; i < res.length; i++) {
        res[i] = [];
    }

    numbers.forEach((x) => {
        res[x].push(x);
    });

    return Array.prototype.concat(...res);
}

/**
 * @returns {number[]}
 */
function parse() {
    const n = readInt();
    if (n === 0) return [];

    const input = readArray();

    return input.map((x) => parseInt(x, 10));
}

/**
 *  Получает на вход результат функции `parse`
 * и вычисляет результат
 * @param {number[]} numbers
 * @returns {string}
 */
function solve(numbers) {
    return sortWardrobe(numbers);
}

/**
 * форматирует результата для вывода
 */
function format(value) {
    return value.join(' ');
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

module.exports = { solveUnlined };
