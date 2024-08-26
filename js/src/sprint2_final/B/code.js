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

class _Vertex {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class List {
    #head = null;
    #size = 0;

    static empty() {
        return new List();
    }

    head() {
        return this.#head;
    }

    push(value) {
        this.#head = new _Vertex(value, this.#head);
        this.#size++;
        return this;
    }

    pull() {
        const res = this.#head;
        this.#head = this.#head === null ? null : this.#head.next;
        this.#size = Math.max(this.#size - 1, 0);
        return res;
    }

    get size() {
        return this.#size;
    }
}

class RPNCalculator {
    #items = List.empty();

    #add() {
        // возможно, нужно проверить на достаточный размер стека
        const operand1 = this.#items.pull();
        const operand2 = this.#items.pull();
        const res = operand1 + operand2;
        this.#push(res);
    }

    #subtract() {}

    #multiply() {}

    #divide() {}

    #push(operand) {
        this.#items.push(operand);
    }

    execute(value) {
        switch (value) {
            case '+':
                this.#add();
                break;
            case '-':
                this.#subtract();
                break;
            case '*':
                this.#multiply();
                break;
            case '/':
                this.#divide();
                break;
            default:
                this.#push();
        }
    }

    get result() {
        return this.#items.head().value;
    }
}

function createCommand(command) {
    return (calc) => {
        calc.execute(command);
    };
}

function solve() {
    const input = readArray();

    const calculator = new RPNCalculator(m);

    const commands = input.map(createCommand);

    commands.forEach((command) => {
        command(calculator);
    });

    process.stdout.write(`${calculator.result}\n`);
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
    RPNCalculator,
    createCommand,
};
