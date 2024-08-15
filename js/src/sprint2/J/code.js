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

class Vertex {
    static cons(value, vertex) {
        return new Vertex(value, vertex);
    }

    static head(vertex) {
        return vertex;
    }

    static tail(vertex) {
        const cur = vertex;
        while (cur.next) {
            cur = vertex.next;
        }
        return cur;
    }

    static size(vertex) {
        let res = 0;
        let cur = vertex;
        while (cur) {
            res++;
            cur = cur.next;
        }
        return res;
    }

    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class ListQueue {
    #head = null;

    put(x) {
        const newVertex = new Vertex(x);
        if (!this.#head) {
            this.#head = newVertex;
        } else {
            const tail = Vertex.tail(this.#head);
            tail.next = newVertex;
        }
    }

    get() {
        if (!this.#head) return new Error();

        const res = this.#head;
        this.#head = this.#head.next;
        return res.value;
    }

    size() {
        return Vertex.size(this.#head);
    }
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

function solve() {
    readInt(); // количество команд

    let input = [];
    while (_curLine < _inputLines.length) {
        input.push(readString());
    }

    const queue = new ListQueue();

    // const commands = input.map(createCommand);

    // commands.forEach((command) => {
    //     const res = command(queue);
    //     if (res !== null && res !== undefined) process.stdout.write(`${res}\n`);
    // });
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
    Vertex,
    ListQueue,
};
