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

    constructor(Stack) {
        this.#stack = new Stack();
    }

    add() {
        // возможно, нужно проверить на достаточный размер стека (>= 2)
        const operand1 = this.#stack.pop();
        const operand2 = this.#stack.pop();
        const res = operand2 + operand1;
        this.#stack.push(res);
    }

    subtract() {
        const operand1 = this.#stack.pop();
        const operand2 = this.#stack.pop();
        const res = operand2 - operand1;
        this.#stack.push(res);
    }

    multiply() {
        const operand1 = this.#stack.pop();
        const operand2 = this.#stack.pop();
        const res = operand2 * operand1;
        this.#stack.push(res);
    }

    divide() {
        const operand1 = this.#stack.pop();
        const operand2 = this.#stack.pop();
        const res = Math.floor(operand2 / operand1);
        this.#stack.push(res);
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
                this.#operations.push(parseInt(value));
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

function solve() {
    const input = readArray();

    const calculator = new RPNCalculator(RPNOperations);

    calculator.execute(input);

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
    RPNOperations,
    RPNCalculator,
};
