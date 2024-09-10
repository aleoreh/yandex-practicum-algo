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
 *
 * @param {string} subseq
 * @param {string} str
 * @returns {boolean}
 */
function subsequence(subseq, str) {
    let i = 0;
    let j = 0;

    while (true) {
        if (subseq[i] === str[j]) {
            i++;
            j++;
        } else {
            j++;
        }

        if (i >= subseq.length) return true;

        if (j >= str.length) return false;
    }
}

/**
 *
 * @param {[string, string]} str
 * @returns {string}
 */
function solve([subseq, str]) {
    const res = subsequence(subseq, str);
    return res ? 'True' : 'False';
}

/**
 * @returns {[string, string]}
 */
function parseInput() {
    const subseq = readString();
    const str = readString();
    return [subseq, str];
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function run() {
    const values = parseInput();
    const output = solve(values);
    process.stdout.write(`${output}`);
}

/**
 * Запускает решение, принимая на вход весь ввод
 * @param {string} inputText - полный текст ввода, не разделённый на строки
 */

function solveUnlined(inputText) {
    _curLine = 0;
    _inputLines = inputText.trim().split('\n');
    const values = parseInput();
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
