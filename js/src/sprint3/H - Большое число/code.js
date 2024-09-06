const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin,
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', (line) => {
    _inputLines.push(line);
});

process.stdin.on('end', run);

// ~~~~~~~~~~~~~~~ решение ~~~~~~~~~~~~~~~ //

function composeBigNumber(numbers) {
    function compare(x, y) {
        return parseInt(`${y}${x}`, 10) - parseInt(`${x}${y}`, 10);
    }
    const sorted = [...numbers].sort(compare);
    return sorted.join('');
}

function solve(input) {
    const arr = input.map((x) => parseInt(x, 10));

    const res = composeBigNumber(arr);

    return [res];
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function run() {
    readInt();
    const values = readArray();
    const outputArr = solve(values);

    outputArr.forEach((res) => {
        process.stdout.write(`${res}`);
    });
}

/**
 * Запускает решение, принимая на вход весь ввод
 * @param {string} inputText - полный текст ввода, не разделённый на строки
 */
function solveUnlined(inputText) {
    const input = inputText.split('\n').map((x) => x.trim());
    const values = input[1].split(' ');
    return solve(values);
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

function readArray() {
    const arr = _inputLines[_curLine].trim().split(' ');
    _curLine++;
    return arr;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

module.exports = { solveUnlined };
