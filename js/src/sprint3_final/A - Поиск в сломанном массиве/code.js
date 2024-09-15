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
 * Вычисляет середину промежутка с округлением вниз
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function middle(x, y) {
    return x + Math.floor((y - x) / 2);
}

/*
1. Находим начало массива с помощью бинарного поиска:
    каждый раз сужаем промежуток вдвое и берём тот, на котором последовательность
    убывает;
    в момент, когда средняя точка совпадает с одним из концов промежутка,
    имеем начало сортировки, равное индексу минимального значения из концов;
    временная сложность - O(log n), так как на каждом шаге длина
    последовательности сокращается вдвое
2. Производим обычный бинарный поиск относительно найденного нулевого элемента;
    временная сложность - O(log n)
Общая временная сложность - O(log n) + O(log n) = O(log n)
*/

/**
 * @param {number[]} arr
 */
function findStart(arr) {
    function intervals(vl, vm, vr) {
        const interv1 = vl < vm ? 1 : vl === vm ? 0 : -1;
        const interv2 = vm < vr ? 1 : vm === vr ? 0 : -1;
        return [interv1, interv2];
    }

    if (arr.length === 0) {
        throw new Error('Последовательность не может быть пустой!');
    }
    if (arr.length === 1) return 0;
    if (arr[0] < arr[arr.length - 1]) return 0;

    let [l, m, r] = [0, middle(0, arr.length - 1), arr.length - 1];

    // цикл доходит до условия выхода, так как промежуток сокращается
    // в два раза на каждом шаге;
    // условие выхода (зависит от interv1 и interv2) отрабатывается
    // в любом случае (присутствуют все комбинации (-1, 0, 1))
    while (true) {
        const [interv1, interv2] = intervals(arr[l], arr[m], arr[r]);

        if (interv1 === -1 && interv2 === -1) {
            throw new Error('Последовательность не отсортирована!');
        }

        if (interv1 === 1 && interv2 === 1 && arr[l] > arr[r]) {
            return m;
        }

        // такое может быть только в несломанном массиве,
        // потому что в сломанном должен оказаться убывающий интервал
        if (interv1 === 1 && interv2 === 1) {
            return 0;
        }

        // поиск в убывающих промежутках сузился до соседних элементов
        // (средняя точка совпала с одним из концов)
        // поэтому минимальный из них будет началом массива
        if (interv1 === 0 || interv2 === 0) {
            return arr[l] < arr[r] ? l : r;
        }

        // берём убывающий промежуток
        if (interv1 === -1) {
            [l, m, r] = [l, middle(l, m), m];
        } else {
            [l, m, r] = [m, middle(m, r), r];
        }
    }
}

function ringSearch(arr, start, value) {
    function coord(x) {
        return (x + start) % arr.length;
    }

    if (arr.length === 0) return undefined;
    if (arr.length === 1) return 0;

    let [l, m, r] = [0, middle(0, arr.length - 1), arr.length - 1];

    while (true) {
        if (m < 0) return undefined;

        if (value === arr[coord(m)]) {
            return coord(m);
        }

        if (value < arr[coord(m)]) {
            [l, m, r] = [l, middle(l, m - 1), m - 1];
        } else {
            [l, m, r] = [m + 1, middle(m + 1, r), r];
        }
    }
}

/**
 *
 * @param {number[]} arr - массив, в котором производится поиск
 * @param {number} k - искомое значение
 */
function brokenSearch(arr, k) {
    const start = findStart(arr);
    return ringSearch(arr, start, k);
}

// ~~ вспомогательные функции для чтения ~ //

/**
 * @returns {[number[], number]}
 */
function parse() {
    readValue();
    const k = readValue((x) => parseInt(x, 10));
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
function readArray(fn) {
    const arr = _inputLines[_curLine].trim().split(' ');
    _curLine++;
    return fn ? arr.map(fn) : arr;
}

function asInt(value) {
    return Array.isArray(value)
        ? value.map((x) => parseInt(x, 10))
        : typeof value === 'number'
          ? value
          : parseInt(value, 10);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

module.exports = { solveUnlined, findStart, ringSearch };
