// Описание алгоритма находится здесь: https://github.com/aleoreh/yandex-practicum-algo/tree/dev/js/src/sprint2_final/A

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

class Dequeue {
    #maxSize = 0;
    #size = 0;
    #front = 0;
    #back = 0;
    #items = [];

    #isFull() {
        return this.#size >= this.#maxSize;
    }

    #isEmpty() {
        return this.#size <= 0
    }

    static incrementPointer(pointer, maxSize) {
        return (pointer + 1) % maxSize;
    }

    static decrementPointer(pointer, maxSize) {
        const res = pointer - 1;
        return res < 0 ? maxSize - 1 : res;
    }

    constructor(maxSize) {
        this.#maxSize = maxSize;
        this.#front = maxSize - 1;
        this.#back = 0;
    }

    pushFront(value) {
        if (this.#isFull()) {
            return new Error();
        }

        this.#items[this.#front] = value;
        this.#front = Dequeue.decrementPointer(this.#front, this.#maxSize);
        this.#size++;
    }

    pushBack(value) {
        if (this.#isFull()) {
            return new Error();
        }

        this.#items[this.#back] = value;
        this.#back = Dequeue.incrementPointer(this.#back, this.#maxSize);
        this.#size++;
    }

    popFront() {
        if (this.#isEmpty()) {
            return new Error();
        }

        const newFront = Dequeue.incrementPointer(this.#front, this.#maxSize);

        const res = this.#items[newFront];

        this.#front = newFront;
        this.#size--;

        return res;
    }

    popBack() {
        if (this.#isEmpty()) {
            return new Error();
        }

        const newBack = Dequeue.decrementPointer(this.#back, this.#maxSize);

        const res = this.#items[newBack];

        this.#back = newBack;
        this.#size--;

        return res;
    }
}

function createCommand(command) {
    return (deque) => {
        const [cmd, valueStr] = command.split(' ');

        switch (cmd) {
            case 'push_back':
                return deque.pushBack(parseInt(valueStr)) instanceof Error
                    ? 'error'
                    : null;
            case 'push_front':
                return deque.pushFront(parseInt(valueStr)) instanceof Error
                    ? 'error'
                    : null;
            case 'pop_back':
                const popBackResult = deque.popBack();
                return popBackResult instanceof Error ? 'error' : popBackResult;
            case 'pop_front':
                const popFrontResult = deque.popFront();
                return popFrontResult instanceof Error
                    ? 'error'
                    : popFrontResult;
        }
    };
}

function solve() {
    readInt();
    const m = readInt(); // максимальный размер
    let input = [];
    while (_curLine < _inputLines.length) {
        input.push(readString());
    }

    const stack = new Dequeue(m);

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
    Dequeue,
    createCommand,
};
