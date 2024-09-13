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

function findStart(values) {
    let i = 0;
    let step = Math.floor(values.length / 2);
    let dirSwitched = false;

    while (!dirSwitched) {
        const prevValue = values[i];
        const nextValue = values[i + step];
        if (
            (step === 1 && nextValue < prevValue) ||
            (step === -1 && nextValue > prevValue)
        ) {
            break;
        }
        i += step;
        step = Math.round(step / 2) * Math.abs(nextValue - prevValue);
    }

    return i;
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

module.exports = { solveUnlined };
