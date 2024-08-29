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

class StackMaxEffective {
    _items = [];
    _maxItems = [];

    push(value) {
        const maxValue = Math.max(value, this._maxItems[0] ?? -Infinity);
        this._items.unshift(value);
        this._maxItems.unshift(maxValue);
    }

    pop() {
        const res = this._items.shift();
        this._maxItems.shift();
        return res !== undefined
    }

    getMax() {
        return this._maxItems[0];
    }

    top() {
        return this._items[0];
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
                const popSuccess = stack.pop();
                return !popSuccess ? 'error' : null;
            case 'get_max':
                const maxRes = stack.getMax();
                return maxRes === undefined ? 'None' : JSON.stringify(maxRes);
            case 'top':
                const topRes = stack.top();
                return topRes === undefined ? 'error' : JSON.stringify(topRes);
        }
    };
}

function solve() {
    const n = readInt();
    let input = [];
    while (_curLine < _inputLines.length) {
        input.push(readString());
    }

    const stack = new StackMaxEffective();

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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

module.exports = {
    StackMaxEffective,
    createCommand,
};
