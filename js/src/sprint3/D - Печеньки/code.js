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
 * @param {number[]} greedFactors
 * @param {number[]} cookieSizes
 * @returns {number}
 */
function satisfiedCount(greedFactors, cookieSizes) {
    let i = 0;
    let j = 0;
    let acc = 0;

    const greedFactorsSorted = greedFactors.slice().sort((x, y) => x - y);
    const cookieSizesSorted = cookieSizes.sort((x, y) => x - y);

    while (i < greedFactorsSorted.length && j < cookieSizesSorted.length) {
        if (greedFactorsSorted[i] <= cookieSizesSorted[j]) {
            acc++;
            i++;
            j++;
        } else {
            j++;
        }
    }

    return acc;
}

/**
 * @returns {[number[], number[]]}
 */
function parse() {
    const n = readInt();
    if (n === 0) return undefined;

    const greedFactors = readArray();

    const m = readInt();
    if (m === 0) return undefined;

    const cookies = readArray();

    return [
        greedFactors.map((x) => parseInt(x, 10)),
        cookies.map((x) => parseInt(x, 10)),
    ];
}

/**
 *  Получает на вход результат функции `parse`
 * и вычисляет результат
 * @param {[number[], number[]]} input
 * @returns {string}
 */
function solve(input) {
    const [greedFactors, cookieSizes] = input;

    return satisfiedCount(greedFactors, cookieSizes);
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

module.exports = { solveUnlined };
