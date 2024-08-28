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

class RPNCalculator {
    #items = [];

    #add_() {
        // возможно, нужно проверить на достаточный размер стека (>= 2)
        const operand1 = this.#items.pop();
        const operand2 = this.#items.pop();
        const res = operand2 + operand1;
        this.#items.push(res);
    }

    #subtract() {
        const operand1 = this.#items.pop();
        const operand2 = this.#items.pop();
        const res = operand2 - operand1;
        this.#items.push(res);
    }

    #multiply() {
        const operand1 = this.#items.pop();
        const operand2 = this.#items.pop();
        const res = operand2 * operand1;
        this.#items.push(res);
    }

    #divide() {
        const operand1 = this.#items.pop();
        const operand2 = this.#items.pop();
        const res = Math.floor(operand2 / operand1);
        this.#items.push(res);
    }

    #push(operand) {
        this.#items.push(operand);
    }

    execute(value) {
        switch (value) {
            case '+':
                this.#add_();
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
                this.#push(parseInt(value));
        }
    }

    get result() {
        return this.#items[this.#items.length - 1];
    }
}

function createCommand(command) {
    return (calc) => {
        calc.execute(command);
    };
}

function solve() {
    const input = readArray();

    const calculator = new RPNCalculator();

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
