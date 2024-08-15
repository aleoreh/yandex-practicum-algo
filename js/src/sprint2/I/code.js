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

// [.|x|x|x|.|.]
//    h     t

class MyQueueSized {
    #maxN = 0;
    #size = 0;
    #head = 0;
    #tail = 0;
    #items = new Array();

    #isEmpty() {
        return this.#size === 0;
    }

    constructor(queueSize) {
        this.#maxN = queueSize;
        this.#items = new Array(queueSize);
    }

    push(value) {
        if (this.#size >= this.#maxN) return new Error();

        this.#items[this.#tail] = value;
        this.#tail = (this.#tail + 1) % this.#maxN;
        this.#size++;
    }

    pop() {
        if (this.#isEmpty()) return null;

        const res = this.#items[this.#head];
        this.#items[this.#head] = null;
        this.#head = (this.#head + 1) % this.#maxN;
        this.#size--;

        return res;
    }

    peek() {
        if (this.#isEmpty()) return null;

        return this.#items[this.#head];
    }

    size() {
        return this.#size;
    }
}

function createCommand(command) {
    return (queue) => {
        const [cmd, valueStr] = command.split(' ');

        switch (cmd) {
            case 'push':
                const value = parseInt(valueStr);
                const pushRes = queue.push(value);
                return pushRes instanceof Error ? 'error' : null;
            case 'pop':
                const popRes = queue.pop();
                return popRes === null ? 'None' : popRes;
            case 'peek':
                const peekRes = queue.peek();
                return peekRes === null ? 'None' : peekRes;
            case 'size':
                return JSON.stringify(queue.size());
            default:
                return null;
        }
    };
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function solve() {
    readInt(); // количество команд
    const queueSize = readInt(); // максимальный размер

    let input = [];
    while (_curLine < _inputLines.length) {
        input.push(readString());
    }

    const queue = new MyQueueSized(queueSize);

    const commands = input.map(createCommand);

    commands.forEach((command) => {
        const res = command(queue);
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
    MyQueueSized,
};
