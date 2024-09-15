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

function quickSortInPlace(arr, compare) {
    function swapInPlace(xs, i, j) {
        const buffer = xs[i];
        xs[i] = xs[j];
        xs[j] = buffer;
    }
    function recur(l, r) {
        while (compare(arr[l], pivot) < 0) {
            l++;
        }
        while (compare(arr[r], pivot) > 0) {
            r--;
        }
        if (l >= r) return;
        swapInPlace(arr, l, r);
        recur(l + 1, r - 1);
    }

    if (arr.length === 0) return;

    let pivot = arr[0];

    recur(0, arr.length - 1);
}

function sortInPlace(contestants) {
    quickSortInPlace(
        contestants,
        0,
        contestants.length - 1,
        ([login1, solvedNum1, penalty1], [login2, solvedNum2, penalty2]) => {
            if (solvedNum1 !== solvedNum2)
                return Math.sign(solvedNum2 - solvedNum1);
            if (penalty1 !== penalty2) return Math.sign(penalty1 - penalty2);
            if (login1 !== login2) return login1 < login2 ? 1 : -1;
            return 0;
        },
    );
}

/**
 * @returns {[number[], number]}
 */
function parse() {
    const n = readValue();
    const contestants = [];
    while (_curLine <= n) {
        const input = readArray();
        contestants.push([
            input[0],
            parseInt(input[1], 10),
            parseInt(input[2], 10),
        ]);
    }

    return contestants;
}

/**
 *  Получает на вход результат функции `parse`
 * и вычисляет результат
 * @param {[string, number, number][]}
 * @returns {string[]}
 */
function solve(contestants) {
    sortInPlace(contestants);
    return contestants.map((x) => x[0]);
}

/**
 * форматирует результата для вывода
 * @param {string[]}
 */
function format(value) {
    return value.join('\n');
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

module.exports = { solveUnlined, quickSortInPlace };
