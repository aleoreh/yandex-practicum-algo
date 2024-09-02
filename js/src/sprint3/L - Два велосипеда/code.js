// Описание алгоритма находится здесь: https://github.com/aleoreh/yandex-practicum-algo/tree/dev/js/src/sprint2_final/B

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

function findHappyDay(observations, amount) {
    function recur(left, right, mid) {
        const distance = right - left;
        if (distance <= 1) {
            const indexes = [left, right].filter(
                (x) => observations[x] >= amount,
            );
            return indexes.length === 0 ? -1 : indexes[0] + 1;
        }

        if (observations[mid] >= amount) {
            return recur(left, mid, left + Math.floor((mid - left) / 2));
        } else {
            return recur(mid, right, mid + Math.floor((right - mid) / 2));
        }
    }

    return recur(
        0,
        observations.length - 1,
        Math.floor((observations.length - 1) / 2),
    );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function solve() {
    readInt(); // число дней n, по которым велись наблюдения

    const input = readArray();
    const amount = readInt();

    const res1 = findHappyDay(input, amount);
    const res2 = findHappyDay(input, amount * 2);

    process.stdout.write(`${res1} ${res2}`);
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
    findHappyDay,
};
