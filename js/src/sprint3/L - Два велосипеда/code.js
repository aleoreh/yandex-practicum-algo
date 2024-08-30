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
    function recur(left, right, prevMid) {
        if (left === right) return -1;

        const mid = Math.floor((left + right) / 2);
        const midValue = observations[mid];

        if (midValue <= amount && amount < observations[prevMid]) {
            return prevMid + 1;
        }

        return midValue > amount
            ? recur(left, mid, mid)
            : recur(mid, right, mid);
    }

    return recur(0, observations.length - 1, 0);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function solve() {
    readInt(); // число дней n, по которым велись наблюдения

    const input = readArray();
    const amount = readInt();

    const res = findHappyDay(input, amount);

    process.stdout.write(`${res.join(' ')}\n`);
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
