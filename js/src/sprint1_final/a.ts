const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin,
});

const _inputLines: string[] = [];
let _curLine = 0;

_reader.on("line", (line: string) => {
    _inputLines.push(line);
});

process.stdin.on("end", solve);

function getNearestZero(xs: number[]) {
    // два прохода - вперёд и обратно;
    //
    // до тех пор, пока не встретили ноль,
    // отмечаем расстояния как Infinity
    //
    // когда встречаем ноль на первом проходе, устанавливаем флаг инкремента,
    // сбрасываем счётчик инкремента и начинаем увеличивать его до встречи
    // следующего нуля
    //
    // на обратном проходе делаем то же самое,
    // но перестаём увеличивать, если счетчик становится
    // больше значения результата

    const res = new Array(xs.length);
    res.fill(Infinity);

    let k = Infinity;

    for (let i = 0; i < res.length; i++) {
        // если ноль пока не встретился, то k = Infinity,
        // так как x + Infinity = Infinity
        // если встречаем ноль, запускаем счётчик
        k = xs[i] === 0 ? 0 : k + 1;

        res[i] = k;
    }

    k = Infinity;

    for (let i = res.length - 1; i >= 0; i--) {
        k = xs[i] === 0 ? 0 : k + 1;

        // если на обратном пути ноль ещё не встретился,
        // то оставляем значение, которое уже есть (x < Infinity),
        // иначе минимальное из счётчика и уже заполненного;
        // таким образом остаются кратчайшие расстояния до нуля
        res[i] = Math.min(k, res[i]);
    }

    return res;
}

function solve() {
    const n = readInt();
    const input = readArray();
    process.stdout.write(`${getNearestZero(input).join(" ")}`);
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    var arr = _inputLines[_curLine]
        .trim()
        .split(" ")
        .map((num) => Number(num));
    _curLine++;
    return arr;
}

export const moduleA = {
    getNearestZero,
};
