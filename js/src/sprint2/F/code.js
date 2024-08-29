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

class StackMax {
    _items = [];

    push(value) {
        this._items.push(value);
    }

    pop() {
        const res = this._items.pop();
        return res;
    }

    getMax() {
        return Math.max(...this._items);
    }
}

function createCommand(command) {
    return (stack) => {
        const [cmd, valueStr] = command.split(' ');

        switch (cmd) {
            case 'push':
                const value = parseInt(valueStr);
                stack.push(value);
                return null;
            case 'pop':
                const popRes = stack.pop();
                return popRes === undefined ? 'error' : null;
            case 'get_max':
                const maxRes = stack.getMax();
                return maxRes === -Infinity ? 'None' : JSON.stringify(maxRes);
        }
    };
}

function solve() {
    const n = readInt();
    let input = [];
    while (_curLine < _inputLines.length) {
        input.push(readString());
    }

    const stack = new StackMax();

    const commands = input.map(createCommand);

    commands.forEach((command) => {
        const res = command(stack);
        if (res !== null && res !== undefined) process.stdout.write(`${res}\n`);
    });
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

module.exports = {
    StackMax,
    createCommand,
};
