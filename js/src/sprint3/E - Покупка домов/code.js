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
 * @param {number} k
 * @param {number[]} prices
 * @returns {number}
 */
function maxCount(k, prices) {
    let acc = 0;
    let res = 0;

    for (const price of prices.slice().sort((x, y) => x - y)) {
        if (acc + price > k) break;

        acc += price;
        res++;
    }

    return res;
}

/**
 * @returns {[number, number[]]}
 */
function parse() {
    const [n, k] = readArray();

    const prices = readArray();

    return [asInt(k), asInt(prices)];
}

/**
 *  Получает на вход результат функции `parse`
 * и вычисляет результат
 * @param {[number, number[]]} input
 * @returns {string}
 */
function solve(input) {
    const [k, prices] = input;

    return maxCount(k, prices);
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
        : parseInt(value, 10);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

module.exports = { solveUnlined };
