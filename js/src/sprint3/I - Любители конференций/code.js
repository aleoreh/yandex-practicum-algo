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
 * @param {number[]} ids
 * @returns {[number, number][]}
 */
function countById(ids) {
    const res = {};
    ids.forEach((id) => {
        if (res[id] === undefined) {
            res[id] = 0;
        }
        res[id]++;
    });
    return Object.keys(res).map((id) => [id, res[id]]);
}

/**
 * @returns {[number[], number]}
 */
function parse() {
    const n = readInt();
    const ids = readArray();
    const k = readInt();

    return [asInt(ids), k];
}

/**
 *  Получает на вход результат функции `parse`
 * и вычисляет результат
 * @param {[number[], number]}
 * @returns {[number, number][]}
 */
function solve([ids, k]) {
    return countById(ids)
        .sort(([id1, count1], [id2, count2]) => count2 - count1)
        .slice(0, k)
        .map(([id, count]) => id);
}

/**
 * форматирует результата для вывода
 * @param {[number, number][]}
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

function asInt(value) {
    return Array.isArray(value)
        ? value.map((x) => parseInt(x, 10))
        : typeof value === 'number'
          ? value
          : parseInt(value, 10);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

module.exports = { solveUnlined };
