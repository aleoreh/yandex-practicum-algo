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

class Stack {
    #items = [];

    push(value) {
        this.#items.push(value);
    }

    pop() {
        return this.#items.pop();
    }

    top() {
        return this.#items[this.#items.length - 1];
    }
}

class RPNOperations {
    #stack;

    #pushCalculation(fn) {
        const [operand2, operand1] = [this.#stack.pop(), this.#stack.pop()];
        this.#stack.push(fn(operand2, operand1));
    }

    constructor(Stack) {
        this.#stack = new Stack();
    }

    add() {
        // возможно, нужно проверить на достаточный размер стека (>= 2)
        this.#pushCalculation((x, y) => y + x);
    }

    subtract() {
        this.#pushCalculation((x, y) => y - x);
    }

    multiply() {
        this.#pushCalculation((x, y) => y * x);
    }

    divide() {
        this.#pushCalculation((x, y) => Math.floor(y / x));
    }

    push(operand) {
        this.#stack.push(operand);
    }

    get result() {
        return this.#stack.top();
    }
}

class RPNCalculator {
    #operations;

    #executeCommand(value) {
        switch (value) {
            case '+':
                this.#operations.add();
                break;
            case '-':
                this.#operations.subtract();
                break;
            case '*':
                this.#operations.multiply();
                break;
            case '/':
                this.#operations.divide();
                break;
            default:
                this.#operations.push(parseInt(value, 10));
        }
    }

    constructor(Operations) {
        this.#operations = new Operations(Stack);
    }

    execute(commands) {
        // принимаем массив команд, чтобы не зависеть от формата входных данных задачи
        commands.forEach((command) => this.#executeCommand(command));
    }

    get result() {
        return this.#operations.result;
    }
}

function executeCalculation(operations) {
    const calculator = new RPNCalculator(RPNOperations);

    calculator.execute(operations);

    return calculator.result;
}

function solve() {
    const input = readArray();

    const res = executeCalculation(input);

    process.stdout.write(`${res}\n`);
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
    RPNOperations,
    RPNCalculator,
};
