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

const NUMBER_OF_PLAYERS = 2;

function maxPoints(numberOfPlayers: number, k: number, arr: string[]): number {
    // считаем, сколько элементов каждого достоинства есть в массиве;
    // если их больше нуля и меньше допустимого количества нажатий на обоих
    // игроков, то прибавляем одно очко
    return [...Array(9).keys()]
        .map((x) => x + 1)
        .reduce((acc, nominal) => {
            const sameNominalCount = arr.filter(
                (key) => key === `${nominal}`
            ).length;
            const curPoints =
                sameNominalCount > 0 && sameNominalCount <= k * numberOfPlayers
                    ? 1
                    : 0;
            return acc + curPoints;
        }, 0);
}

function solve() {
    const n = readInt();
    const inputs = [] as string[][];
    for (let i = 0; i < 4; i++) {
        const input = readArray();
        inputs.push(input);
    }
    process.stdout.write(
        `${maxPoints(NUMBER_OF_PLAYERS, n, inputs.join("").split(""))}`
    );
}

function readInt() {
    const n = Number(_inputLines[_curLine]);
    _curLine++;
    return n;
}

function readArray() {
    var arr = _inputLines[_curLine].trim().split(" ");
    _curLine++;
    return arr;
}

export const moduleB = {
    NUMBER_OF_PLAYERS,
    maxPoints,
};
