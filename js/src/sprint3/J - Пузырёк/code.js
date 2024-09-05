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

function bubbleSortInPlace(arr, callbackOnChange) {
    function swap(xs, i) {
        var buffer = xs[i + 1];
        xs[i + 1] = xs[i];
        xs[i] = buffer;
    }
    var callback = callbackOnChange || function () {};
    if (arr.length <= 1) {
        callback(arr);
        return;
    }
    var block = arr.length; // block >= 2, в начальной позиции смотрит за пределы массива
    while (block >= 2) {
        var isSwapped = false;
        for (var i = 0; i < block - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                swap(arr, i);
                isSwapped = true;
            }
        }
        isSwapped && callback(arr);
        block--;
    }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function solve() {
    readInt();
    const arr = readArray().map((x) => parseInt(x, 10));

    const res = [];

    bubbleSortInPlace(arr, (x) => res.push(x.join(' ')));

    if (res.length > 0) {
        process.stdout.write(`${res.join('\n')}`);
    } else {
        process.stdout.write(`${arr.join(' ')}`);
    }
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

module.exports = {
    bubbleSortInPlace,
};
