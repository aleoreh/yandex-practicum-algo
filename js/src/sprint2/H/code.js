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

class BraceValidator {
    _items = { brackets: 0, braces: 0, curlyBraces: 0 };

    #operations = {
        '(': () => {
            this._items.braces++;
        },
        ')': () => {
            const res = this._items.braces - 1;
            if (res > 0) this._items.braces = res;
        },
        '[': () => {
            this._items.brackets++;
        },
        ']': () => {
            this._items.brackets--;
        },
        '{': () => {
            this._items.curlyBraces++;
        },
        '}': () => {
            this._items.curlyBraces--;
        },
    };

    push(value) {
        if (value in this.#operations) this.#operations[value]();
    }

    isValid() {
        return (
            this._items.braces === 0 &&
            this._items.brackets === 0 &&
            this._items.curlyBraces === 0
        );
    }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function solve() {
    const input = readString();
    const validator = new BraceValidator();

    input.split('').forEach((value) => validator.push(value));

    const res = validator.isValid() ? 'True' : 'False';

    process.stdout.write(`${res}`);
}

function readString() {
    const res = _inputLines[_curLine];
    _curLine++;
    return res;
}
