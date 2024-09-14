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
    каждый раз сужаем промежуток вдвое и берём тот, на котором последовательность
    убывает;
    если последовательность везде возрастает, то начало сортировки приходится
    на начало массива;
    в момент, когда средняя точка совпадает с одним из концов промежутка,
    имеем начало сортировки, равное индексу минимального значения из концов;
    временная сложность - O(log n), так как на каждом шаге длина
    последовательности сокращается вдвое
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

    function intervals(vl, vm, vr) {
        const interv1 = vl < vm ? 1 : vl === vm ? 0 : -1;
        const interv2 = vm < vr ? 1 : vm === vr ? 0 : -1;
        return [interv1, interv2];
    }

    if (values.length === 0) return -1;
    if (values.length === 1) return 0;

    let [l, m, r] = [0, middle(0, values.length - 1), values.length - 1];

    // цикл доходит до условия выхода, так как промежуток сокращается
    // в два раза на каждом шаге;
    // условие выхода (зависит от interv1 и interv2) отрабатывается
    // в любом случае (присутствуют все комбинации (-1, 0, 1))
    while (true) {
        // находим возрастание и убывание на промежутках [l,m] и [m,r]
        const [interv1, interv2] = intervals(values[l], values[m], values[r]);

        if (interv1 === -1 && interv2 === -1) {
            throw new Error('Последовательность не отсортирована!');
        }

        // если последовательность возрастает или не изменяется \
        // на всех промежутках, то начало находится в точке 0
        if (interv1 === interv2) return 0;

        // поиск в убывающих промежутках сузился до соседних элементов
        // (средняя точка совпала с одним из концов)
        // поэтому минимальный из них будет началом массива
        if (interv1 === 0 || interv2 === 0) {
            return values[l] < values[r] ? l : r;
        }

        // берём убывающий промежуток
        if (interv1 === -1) {
            [l, m, r] = [l, middle(l, m), m];
        } else {
            [l, m, r] = [m, middle(m, r), r];
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
