const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin,
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', (line) => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function transpose(matrix) {
    const rowsCount = matrix.length;
    const colsCount = matrix.length > 0 ? matrix[0].length : 0;

    const res = new Array(colsCount).fill(undefined);

    res.forEach((_, i) => {
        res[i] = new Array(rowsCount).fill(undefined);
    });

    for (let r = 0; r < rowsCount; r++) {
        for (let c = 0; c < colsCount; c++) {
            res[c][r] = matrix[r][c];
        }
    }

    return res;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function solve() {
    const input = [];

    readInt(); // количество строк матрицы
    readInt(); // количество столбцов матрицы

    while (_curLine < _inputLines.length) {
        input.push(readString());
    }

    const matrix = input.map((line) =>
        line
            .split(' ')
            .filter((x) => x !== '')
            .map((x) => parseInt(x)),
    );

    const res = transpose(matrix);

    process.stdout.write(`${res.map((row) => row.join(' ')).join('\n')}\n`);
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

module.exports = { transpose };
