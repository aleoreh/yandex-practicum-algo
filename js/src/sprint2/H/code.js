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
    _items = [];

    #isClosing(x, y) {
        return (
            (y === '(' && x === ')') ||
            (y === '[' && x === ']') ||
            (y === '{' && x === '}')
        );
    }

    push(value) {
        if (this.#isClosing(value, this._items[0])) {
            this._items.shift();
        } else {
            this._items.unshift(value);
        }
    }

    isValid() {
        return this._items.length === 0;
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
