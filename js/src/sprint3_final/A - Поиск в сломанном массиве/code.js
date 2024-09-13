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

/*
1. Находим начало массива с помощью бинарного поиска:
    поиск должен дойти до единичного шага; то место, где при единичном шаге
    значение становится меньше при движении вперёд или больше при движении
    назад, является началом массива; временная сложность - O(log n)
2. Производим обычный бинарный поиск относительно найденного нулевого элемента;
    временная сложность - O(log n)
Общая временная сложность - O(log n) + O(log n) = O(log n)
*/

/**
 * @param {number[]} values
 */
function findStart(values) {
    function middle(x, y) {
        return x + Math.floor((y - x) / 2);
    }

    if (values.length === 0) return undefined;

    let [l, m, r] = [0, middle(0, values.length - 1), values.length];

    while (true) {
        if (l === m) return r;
        if (m === r) return l;
        if (values[l] < values[m]) {
            [l, m, r] = [l, middle(l, m - 1), m - 1];
        } else {
            [l, m, r] = [m + 1, middle(m + 1, r), r];
        }
    }
}

/**
 *
 * @param {number[]} values - массив, в котором производится поиск
 * @param {number} k - искомое значение
 */
function brokenSearch(values, k) {}

// ~~ вспомогательные функции для чтения ~ //

/**
 * @returns {[number[], number]}
 */
function parse() {
    readValue();
    const n = readValue((x) => parseInt(x, 10));
    const numbers = readArray((x) => parseInt(x, 10));

    return [numbers, k];
}

/**
 *  Получает на вход результат функции `parse`
 * и вычисляет результат
 * @param {[number[], number]}
 * @returns {number}
 */
function solve([values, k]) {
    return brokenSearch(values, k);
}

/**
 * форматирует результата для вывода
 * @param {[number, number][]}
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

function readValue(fn) {
    const res = _inputLines[_curLine];
    _curLine++;
    return fn ? fn(res) : res;
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

module.exports = { solveUnlined, findStart };
